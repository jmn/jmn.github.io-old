---
layout: post
title: Testing ox-md publishing
---
I like Palatino Linotype.
It looks good on my system.

Example:
Set the font in the menu (S-LClick)/Change buffer font.
Use C-u C-x = look at "uniscribe" value.
Set the font using set-face-font or set-face-attribute (see below):

Example
variable-pitch: Gotham HTF Medium
uniscribe:-outline-Gotham HTF Medium-normal-normal-normal-mono-19-\*-\*-\*-p-\*-iso8859-1 (#x01)

(set-face-attribute 'variable-pitch (selected-frame) :font "-outline-Gotham HTF Medium-normal-normal-normal-mono-18-\*-\*-\*-p-\*-iso8859-1")

(set-face-font 'variable-pitch "-outline-Gotham HTF Medium-normal-normal-normal-mono-19-\*-\*-\*-p-\*-iso8859-1")

    position: 7185 of 7422 (97%), restriction: <7097-7251>, column: 27
    character: C-j (displayed as C-j) (codepoint 10, #o12, #xa)
     preferred charset: ascii (ASCII (ISO646 IRV))
    code point in charset: 0x0A
    script: latin
                   syntax:      which means: whitespace
                 to input: type "C-x 8 RET HEX-CODEPOINT" or "C-x 8 RET NAME"
              buffer code: #x0A
                file code: #x0A (encoded by coding system iso-latin-1-dos)
                  display: by this font (glyph code)
        uniscribe:-outline-Palatino Linotype-normal-normal-normal-serif-25-*-*-*-p-*-iso8859-1 (#x231)
    
    Character code properties: customize what to show
      old-name: LINE FEED (LF)
      general-category: Cc (Other, Control)
      decomposition: (10) ('
    ')
    
    There are text properties here:
      fontified            t
