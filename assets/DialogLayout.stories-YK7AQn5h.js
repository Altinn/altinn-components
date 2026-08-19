import{a7 as e}from"./iframe-Dvni_u8W.js";import{D as d}from"./DialogLayout-ByTRcimA.js";import{S as n}from"./ArrowRedo-CRah1S5y.js";import{S as o}from"./EyeClosed-CDcoW8Ix.js";import{S as t}from"./Archive-D9xo3Eat.js";import{S as i}from"./Trash-0Q12wXYH.js";import"./preload-helper-PPVm8Dsz.js";import"./PageBase-CCZehxKM.js";import"./Flex-C0xjv22N.js";import"./ArrowUndo-CuxdBiYe.js";import"./PageMenu-B-AXUxNK.js";import"./ContextMenu-DLU0U19W.js";import"./useDropdownMenuController-C43pfIK4.js";import"./Dropdown-BFgXRZ9P.js";import"./SearchField-CJEH8bYw.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./FieldBase-ChKWoxnf.js";import"./Typography-UWzQw34I.js";import"./useHighlightedText-CLLTD9Wh.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";import"./useMenu-wTmWM5n-.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./ItemMedia-BulytyAO.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./Heading-CzH7HB6a.js";import"./ItemControls-C8iXC4AM.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./ChevronRight-CHz63rRB.js";import"./InformationSquare-ZFR98d1q.js";import"./MenuElipsisHorizontal-ChUvvCwa.js";const X={title:"Inbox/Dialog/DialogLayout",component:d,tags:["beta"],parameters:{}},l={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},c={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",href:"#delete"}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},s={args:{backButton:{label:"Tilbake",onClick:()=>console.log("Back clicked")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:()=>console.log("Option 1 clicked")},{id:"2",label:"Alternativ 2",onClick:()=>console.log("Option 2 clicked")}]},pageMenu:{items:[{id:"1",icon:n,title:"Del og gi tilgang",as:"button",onClick:()=>console.log("Share clicked")},{id:"2",icon:o,title:"Marker som ulest",as:"button",onClick:()=>console.log("Mark unread clicked")},{id:"3",icon:t,title:"Flytt til arkiv",as:"button",onClick:()=>console.log("Archive clicked")},{id:"4",icon:i,title:"Flytt til papirkurv",as:"button",onClick:()=>console.log("Delete clicked")}]},children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dialog Title"}),e.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
