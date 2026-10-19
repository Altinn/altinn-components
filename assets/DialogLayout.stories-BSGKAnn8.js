var g=Object.defineProperty;var e=(k,h)=>g(k,"name",{value:h,configurable:!0});import{a7 as n}from"./iframe-BhbNl8M-.js";import{D as u}from"./DialogLayout-2KP8s78S.js";import{S as o}from"./ArrowRedo-B4ji5whx.js";import{S as t}from"./EyeClosed-BwhjKXuQ.js";import{S as i}from"./Archive-CfOkFSG4.js";import{S as l}from"./Trash-Df4Pkq18.js";import"./preload-helper-Cc2_yIPf.js";import"./PageBase-PeSNWFKS.js";import"./Flex-ywhhAUvJ.js";import"./ArrowUndo-D9tJ-Erq.js";import"./PageMenu-BuN2e6zp.js";import"./ContextMenu-Ij8B0w81.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";const ne={title:"Inbox/Dialog/DialogLayout",component:u,tags:["beta"],parameters:{}},c={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},s={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},d={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:e(()=>console.log("Option 1 clicked"),"onClick")},{id:"2",label:"Alternativ 2",onClick:e(()=>console.log("Option 2 clicked"),"onClick")}]},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const oe=["Default","WithAnchors","MixedButtonsAndAnchors","WithBaseTheme","WithContextMenu"];export{c as Default,a as MixedButtonsAndAnchors,r as WithAnchors,s as WithBaseTheme,d as WithContextMenu,oe as __namedExportsOrder,ne as default};
