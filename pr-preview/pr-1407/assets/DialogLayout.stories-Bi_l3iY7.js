import{a7 as e}from"./iframe-CsUY_6Pm.js";import{D as d}from"./DialogLayout-DJEtP-x6.js";import{S as n}from"./ArrowRedo-DiJqPQ_Z.js";import{S as o}from"./EyeClosed-CYiCR1-R.js";import{S as t}from"./Archive-kIb2-4cW.js";import{S as i}from"./Trash-DlYZzTYR.js";import"./preload-helper-PPVm8Dsz.js";import"./PageBase-DESfhS8K.js";import"./Flex-Cj4qx1cq.js";import"./ArrowUndo-BxC8gcYi.js";import"./PageMenu-CZnS--vz.js";import"./ContextMenu-bLhI4Wts.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./SearchField-R79aEMhJ.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./useHighlightedText-CEZnR4nZ.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./useMenu-C86uaFsI.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./ItemLabel-CCNLeNoZ.js";import"./Heading-DbOWCbW_.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ChevronRight-JfwdXccy.js";import"./InformationSquare-DR0XxH_N.js";import"./MenuElipsisHorizontal-CtugNeIq.js";const Y={title:"Inbox/Dialog/DialogLayout",component:d,tags:["beta"],parameters:{}},l={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},c={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},s={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:()=>console.log("Option 1 clicked")},{id:"2",label:"Alternativ 2",onClick:()=>console.log("Option 2 clicked")}]},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Z=["Default","WithAnchors","MixedButtonsAndAnchors","WithBaseTheme","WithContextMenu"];export{l as Default,r as MixedButtonsAndAnchors,c as WithAnchors,a as WithBaseTheme,s as WithContextMenu,Z as __namedExportsOrder,Y as default};
