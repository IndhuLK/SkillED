import { useState, useRef, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Separator } from '../../components/ui/separator';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link,
  Heading1,
  Heading2,
  Heading3,
  Code,
  Quote,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Type,
  Image,
  Palette,
  X
} from 'lucide-react';

export function RichTextEditor({ value, onChange, placeholder }) {
  const editorRef = useRef(null);
  const [isRTL, setIsRTL] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const colors = [
    '#000000', '#374151', '#6B7280', '#9CA3AF', '#D1D5DB',
    '#EF4444', '#F97316', '#EAB308', '#22C55E', '#06B6D4',
    '#3B82F6', '#8B5CF6', '#EC4899', '#F43F5E', '#84CC16'
  ];

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command, value) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const toggleRTL = () => {
    const newRTL = !isRTL;
    setIsRTL(newRTL);
    if (editorRef.current) {
      editorRef.current.style.direction = newRTL ? 'rtl' : 'ltr';
      editorRef.current.style.textAlign = newRTL ? 'right' : 'left';
    }
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const handleImageInsert = () => {
    if (imageUrl.trim()) {
      const imgHtml = `<img src="${imageUrl}" alt="${imageAlt}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;" />`;
      document.execCommand('insertHTML', false, imgHtml);
      handleInput();
      setImageUrl('');
      setImageAlt('');
      setShowImageDialog(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyColor = (color) => {
    execCommand('foreColor', color);
    setShowColorPalette(false);
  };

  const toolbarButtons = [
    { command: 'bold', icon: Bold, label: 'Bold' },
    { command: 'italic', icon: Italic, label: 'Italic' },
    { command: 'underline', icon: Underline, label: 'Underline' },
    { type: 'separator' },
    { command: 'formatBlock', value: '<h1>', icon: Heading1, label: 'Heading 1' },
    { command: 'formatBlock', value: '<h2>', icon: Heading2, label: 'Heading 2' },
    { command: 'formatBlock', value: '<h3>', icon: Heading3, label: 'Heading 3' },
    { type: 'separator' },
    { command: 'insertUnorderedList', icon: List, label: 'Bullet List' },
    { command: 'insertOrderedList', icon: ListOrdered, label: 'Numbered List' },
    { type: 'separator' },
    { command: 'justifyLeft', icon: AlignLeft, label: 'Align Left' },
    { command: 'justifyCenter', icon: AlignCenter, label: 'Align Center' },
    { command: 'justifyRight', icon: AlignRight, label: 'Align Right' },
    { type: 'separator' },
    { command: 'formatBlock', value: '<blockquote>', icon: Quote, label: 'Quote' },
    { command: 'formatBlock', value: '<pre>', icon: Code, label: 'Code Block' },
    { type: 'separator' },
    { command: 'custom', action: insertLink, icon: Link, label: 'Insert Link' },
    { command: 'custom', action: () => setShowImageDialog(true), icon: Image, label: 'Insert Image' },
    { command: 'custom', action: () => setShowColorPalette(!showColorPalette), icon: Palette, label: 'Text Color' },
    { command: 'custom', action: toggleRTL, icon: Type, label: `Switch to ${isRTL ? 'LTR' : 'RTL'}` },
  ];

  return (
    <div className="border border-border rounded-lg overflow-hidden relative">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-muted/30 border-b border-border">
        {toolbarButtons.map((button, index) => {
          if (button.type === 'separator') {
            return <Separator key={index} orientation="vertical" className="h-6" />;
          }

          const IconComponent = button.icon;
          
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => {
                if (button.command === 'custom' && button.action) {
                  button.action();
                } else {
                  execCommand(button.command, button.value);
                }
              }}
              title={button.label}
            >
              <IconComponent className="h-4 w-4" />
            </Button>
          );
        })}
      </div>

      {/* Color Palette */}
      {showColorPalette && (
        <div className="absolute top-12 left-2 z-10 bg-background border border-border rounded-lg p-3 shadow-lg">
          <div className="grid grid-cols-5 gap-2 mb-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded border border-border hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => applyColor(color)}
                title={color}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowColorPalette(false)}
            className="w-full"
          >
            Close
          </Button>
        </div>
      )}

      {/* Editor */}
      <div 
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        className={`
          min-h-[300px] max-h-[600px] overflow-y-auto p-4 text-foreground bg-background
          focus:outline-none focus:ring-0
          prose prose-sm max-w-none
          [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-5 [&_h2]:mb-3
          [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-2
          [&_p]:mb-3 [&_p]:leading-relaxed
          [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
          [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:text-sm
          [&_code]:bg-muted [&_code]:px-1 [&_code]:rounded [&_code]:text-sm
          [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-3
          [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-3
          [&_li]:mb-1
          [&_a]:text-primary [&_a]:underline
          [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-4
        `}
        style={{
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left'
        }}
        data-placeholder={placeholder}
      />

      {/* RTL Indicator */}
      {isRTL && (
        <div className="px-4 py-2 bg-muted/50 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Right-to-Left mode enabled
          </span>
        </div>
      )}

      {/* Image Dialog */}
      {showImageDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg shadow-lg w-[500px] max-w-[90vw]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Insert Image</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowImageDialog(false);
                  setImageUrl('');
                  setImageAlt('');
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-upload">Upload Image</Label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-2"
                />
              </div>
              
              <div className="text-center text-muted-foreground">or</div>
              
              <div>
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="image-alt">Alt Text *</Label>
                <Input
                  id="image-alt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Describe the image for accessibility"
                  className="mt-2"
                />
              </div>
              
              {imageUrl && (
                <div className="mt-4">
                  <img
                    src={imageUrl}
                    alt={imageAlt || "Preview"}
                    className="max-w-full h-auto max-h-32 object-contain rounded border"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowImageDialog(false);
                  setImageUrl('');
                  setImageAlt('');
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleImageInsert}
                disabled={!imageUrl.trim() || !imageAlt.trim()}
              >
                Insert Image
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9CA3AF;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}