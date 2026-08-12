import{a7 as e}from"./iframe-BOq385O8.js";import{D as d}from"./DialogLayout-BA0DBUsO.js";import{S as n}from"./ArrowRedo-DRIgnzAr.js";import{S as o}from"./EyeClosed-DgfGayNa.js";import{S as t}from"./Archive-EAW4hj1t.js";import{S as i}from"./Trash-CZ2Z9NgZ.js";import"./preload-helper-PPVm8Dsz.js";import"./PageBase-BG143wOR.js";import"./Flex-CyZuoM67.js";import"./ArrowUndo-BRAjq8UN.js";import"./PageMenu-C11trFS1.js";import"./ContextMenu-66ekmVcw.js";import"./useDropdownMenuController-Bc426jVC.js";import"./Dropdown-B3R21JXo.js";import"./SearchField-1cIkQLXt.js";import"./MagnifyingGlass-DLwuof1g.js";import"./FieldBase-SENAbJS5.js";import"./Typography-DYb-ep--.js";import"./useHighlightedText-COTrDIB8.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./useMenu-RUc5K2KC.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./Heading-BGbBHiZX.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ChevronRight-8gth-Lkl.js";import"./InformationSquare-ChpInVUG.js";import"./MenuElipsisHorizontal-Dl29S16F.js";const X={title:"Inbox/Dialog/DialogLayout",component:d,tags:["beta"],parameters:{}},l={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},c={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},s={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:()=>console.log("Option 1 clicked")},{id:"2",label:"Alternativ 2",onClick:()=>console.log("Option 2 clicked")}]},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Y=["Default","WithAnchors","MixedButtonsAndAnchors","WithBaseTheme","WithContextMenu"];export{l as Default,r as MixedButtonsAndAnchors,c as WithAnchors,a as WithBaseTheme,s as WithContextMenu,Y as __namedExportsOrder,X as default};
