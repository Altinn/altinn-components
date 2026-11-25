var g=Object.defineProperty;var e=(k,h)=>g(k,"name",{value:h,configurable:!0});import{a6 as n}from"./iframe-BYGPhf7N.js";import{D as u}from"./DialogLayout-ByunhKGb.js";import{S as o}from"./ArrowRedo-DeUDTAUf.js";import{S as t}from"./EyeClosed-B11GW1OE.js";import{S as i}from"./Archive-wTNP5JWn.js";import{S as l}from"./Trash-Aw4yKrn_.js";import"./preload-helper-Cc2_yIPf.js";import"./PageBase-CxZ8FIOJ.js";import"./Flex-DJhBIPT8.js";import"./ArrowUndo-BhG5BbM5.js";import"./PageMenu-CdkNY7Jx.js";import"./ContextMenu-D1_m3HcS.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";const ee={title:"Inbox/Dialog/DialogLayout",component:u,parameters:{}},c={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This is the dialog content. Hover over the page menu buttons above to test the hover states."})]})}},r={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",href:"#share"},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",href:"#archive"},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states."})]})}},a={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",href:"#mark-unread"},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",href:"#delete"}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example mixes buttons and anchors. All items should have working hover states."})]})}},s={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme."})]})}},d={args:{backButton:{label:"Tilbake",onClick:e(()=>console.log("Back clicked"),"onClick")},contextMenu:{items:[{id:"1",label:"Alternativ 1",onClick:e(()=>console.log("Option 1 clicked"),"onClick")},{id:"2",label:"Alternativ 2",onClick:e(()=>console.log("Option 2 clicked"),"onClick")}]},pageMenu:{items:[{id:"1",icon:o,title:"Del og gi tilgang",as:"button",onClick:e(()=>console.log("Share clicked"),"onClick")},{id:"2",icon:t,title:"Marker som ulest",as:"button",onClick:e(()=>console.log("Mark unread clicked"),"onClick")},{id:"3",icon:i,title:"Flytt til arkiv",as:"button",onClick:e(()=>console.log("Archive clicked"),"onClick")},{id:"4",icon:l,title:"Flytt til papirkurv",as:"button",onClick:e(()=>console.log("Delete clicked"),"onClick")}]},children:n.jsxs("div",{children:[n.jsx("h1",{children:"Dialog Title"}),n.jsx("p",{children:"This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states."})]})}},ne=["Default","WithAnchors","MixedButtonsAndAnchors","WithBaseTheme","WithContextMenu"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};export{c as Default,a as MixedButtonsAndAnchors,r as WithAnchors,s as WithBaseTheme,d as WithContextMenu,ne as __namedExportsOrder,ee as default};
