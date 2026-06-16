import{a7 as e}from"./iframe-Dai1liu3.js";import{D as d}from"./DialogLayout-DDJ-oOrH.js";import{S as n}from"./ArrowRedo-BT52uSFt.js";import{S as o}from"./EyeClosed-BlaO8N4X.js";import{S as t}from"./Archive-CKAhmZ-n.js";import{S as i}from"./Trash-DCzB4pSB.js";import"./preload-helper-PPVm8Dsz.js";import"./PageBase-BoUparIw.js";import"./Flex-BVj8i7c1.js";import"./ArrowUndo-iQjbo1Ik.js";import"./PageMenu-Sk9ySvKe.js";import"./ContextMenu-D6E4TjJ4.js";import"./useDropdownMenuController-D6ah7-Cm.js";import"./Dropdown-qfadPHLV.js";import"./SearchField-RxPS0VwN.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./FieldBase-CqsxpTvX.js";import"./Typography-DKU5x7uE.js";import"./useHighlightedText-DBCcFNzk.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./Input-4lJD8g37.js";import"./useMenu-Cn8ytCIG.js";import"./MenuListItem-CU8Yw_FM.js";import"./MenuListDivider-wVnt0d0h.js";import"./MenuListHeading-uHuYXsTq.js";import"./MenuItem-Bmkwg1bx.js";import"./ItemMedia-BM0esdrg.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Checkmark-B5_y3YEn.js";import"./ItemLabel-B5CnFFsc.js";import"./Heading-DmQEE02y.js";import"./ItemControls-5TCj7bye.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./ChevronRight-B3RrQIZJ.js";import"./InformationSquare-RpHoIVms.js";import"./MenuElipsisHorizontal-DksIAP7L.js";const X={title:"Inbox/Dialog/DialogLayout",component:d,tags:["beta"],parameters:{}},l={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},c={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},s={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:()=>console.log("Option 1 clicked")},{id:"2",label:"Alternativ 2",onClick:()=>console.log("Option 2 clicked")}]},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
