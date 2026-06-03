import{a7 as e}from"./iframe-Dmn_-H53.js";import{D as d}from"./DialogLayout-DtUki2J7.js";import{S as n}from"./ArrowRedo-CbosDnH7.js";import{S as o}from"./EyeClosed-D89juT-z.js";import{S as t}from"./Archive-BHSi9wSQ.js";import{S as i}from"./Trash-DbwGnQTy.js";import"./preload-helper-PPVm8Dsz.js";import"./PageBase-BpHOckLl.js";import"./Flex-Dt5U6DKy.js";import"./ArrowUndo-bK1i10ui.js";import"./PageMenu-_C26s9IW.js";import"./ContextMenu-CGD-TvHH.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./SearchField-DeTed8Dk.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./useHighlightedText-CD-cx98y.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./useMenu-B_9AoNot.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuListHeading-BrW5zaeP.js";import"./MenuItem-C30u_q0-.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./Heading-mFrUmf7m.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./ChevronRight-Wr9L-VUi.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./MenuElipsisHorizontal-CvUsH0ZC.js";const X={title:"Inbox/Dialog/DialogLayout",component:d,tags:["beta"],parameters:{}},l={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},c={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},s={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:()=>console.log("Option 1 clicked")},{id:"2",label:"Alternativ 2",onClick:()=>console.log("Option 2 clicked")}]},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
