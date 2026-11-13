var g=Object.defineProperty;var e=(k,h)=>g(k,"name",{value:h,configurable:!0});import{a7 as n}from"./iframe-r-PzxnFG.js";import{D as u}from"./DialogLayout-ChWKx_Qh.js";import{S as o}from"./ArrowRedo-DIywjVZv.js";import{S as t}from"./EyeClosed-Cc_5G8cI.js";import{S as i}from"./Archive-CAWbyIsL.js";import{S as l}from"./Trash-0c2zCAv3.js";import"./preload-helper-Cc2_yIPf.js";import"./PageBase-DxNDcwho.js";import"./Flex-DRLqoZbu.js";import"./ArrowUndo-BHFoGQzk.js";import"./PageMenu-DX0LPLJR.js";import"./ContextMenu-Cek1quhS.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";const oe={title:"Inbox/Dialog/DialogLayout",component:u,parameters:{}},c={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},s={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},d={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:e(()=>console.log("Option 1 clicked"),"onClick")},{id:"2",label:"Alternativ 2",onClick:e(()=>console.log("Option 2 clicked"),"onClick")}]},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}},te=["Default","WithAnchors","MixedButtonsAndAnchors","WithBaseTheme","WithContextMenu"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked')
    },
    pageMenu: {
      items: [{
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        as: 'button',
        onClick: () => console.log('Share clicked')
      }, {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
        as: 'button',
        onClick: () => console.log('Mark unread clicked')
      }, {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
        as: 'button',
        onClick: () => console.log('Archive clicked')
      }, {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
        as: 'button',
        onClick: () => console.log('Delete clicked')
      }]
    },
    children: <div>
        <h1>Dialog Title</h1>
        <p>This is the dialog content. Hover over the page menu buttons above to test the hover states.</p>
      </div>
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked')
    },
    pageMenu: {
      items: [{
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        href: '#share'
      }, {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
        href: '#mark-unread'
      }, {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
        href: '#archive'
      }, {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
        href: '#delete'
      }]
    },
    children: <div>
        <h1>Dialog Title</h1>
        <p>
          This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states.
        </p>
      </div>
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked')
    },
    pageMenu: {
      items: [{
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        as: 'button',
        onClick: () => console.log('Share clicked')
      }, {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
        href: '#mark-unread'
      }, {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
        as: 'button',
        onClick: () => console.log('Archive clicked')
      }, {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
        href: '#delete'
      }]
    },
    children: <div>
        <h1>Dialog Title</h1>
        <p>This example mixes buttons and anchors. All items should have working hover states.</p>
      </div>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked')
    },
    pageMenu: {
      items: [{
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        as: 'button',
        onClick: () => console.log('Share clicked')
      }, {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
        as: 'button',
        onClick: () => console.log('Mark unread clicked')
      }, {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
        as: 'button',
        onClick: () => console.log('Archive clicked')
      }, {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
        as: 'button',
        onClick: () => console.log('Delete clicked')
      }]
    },
    children: <div>
        <h1>Dialog Title</h1>
        <p>
          This example uses the base theme. Hover over the page menu buttons to test the hover states with the base
          theme.
        </p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked')
    },
    contextMenu: {
      items: [{
        id: '1',
        label: 'Alternativ 1',
        onClick: () => console.log('Option 1 clicked')
      }, {
        id: '2',
        label: 'Alternativ 2',
        onClick: () => console.log('Option 2 clicked')
      }]
    },
    pageMenu: {
      items: [{
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        as: 'button',
        onClick: () => console.log('Share clicked')
      }, {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
        as: 'button',
        onClick: () => console.log('Mark unread clicked')
      }, {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
        as: 'button',
        onClick: () => console.log('Archive clicked')
      }, {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
        as: 'button',
        onClick: () => console.log('Delete clicked')
      }]
    },
    children: <div>
        <h1>Dialog Title</h1>
        <p>
          This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover
          states.
        </p>
      </div>
  }
}`,...d.parameters?.docs?.source}}};export{c as Default,a as MixedButtonsAndAnchors,r as WithAnchors,s as WithBaseTheme,d as WithContextMenu,te as __namedExportsOrder,oe as default};
