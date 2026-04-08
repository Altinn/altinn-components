import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Archive-D_VKIJvC.js";import{t as n}from"./ArrowRedo-DzBkTQZy.js";import{t as r}from"./EyeClosed-D72Zg8g-.js";import{t as i}from"./Trash-CA--6OQp.js";import{t as a}from"./DialogLayout-CXkDsKLz.js";var o=e(),s={title:`Inbox/Dialog/DialogLayout`,component:a,tags:[`beta`],parameters:{}},c={args:{backButton:{label:`Tilbake`,onClick:()=>console.log(`Back clicked`)},pageMenu:{items:[{id:`1`,icon:n,title:`Del og gi tilgang`,as:`button`,onClick:()=>console.log(`Share clicked`)},{id:`2`,icon:r,title:`Marker som ulest`,as:`button`,onClick:()=>console.log(`Mark unread clicked`)},{id:`3`,icon:t,title:`Flytt til arkiv`,as:`button`,onClick:()=>console.log(`Archive clicked`)},{id:`4`,icon:i,title:`Flytt til papirkurv`,as:`button`,onClick:()=>console.log(`Delete clicked`)}]},children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{children:`Dialog Title`}),(0,o.jsx)(`p`,{children:`This is the dialog content. Hover over the page menu buttons above to test the hover states.`})]})}},l={args:{backButton:{label:`Tilbake`,onClick:()=>console.log(`Back clicked`)},pageMenu:{items:[{id:`1`,icon:n,title:`Del og gi tilgang`,href:`#share`},{id:`2`,icon:r,title:`Marker som ulest`,href:`#mark-unread`},{id:`3`,icon:t,title:`Flytt til arkiv`,href:`#archive`},{id:`4`,icon:i,title:`Flytt til papirkurv`,href:`#delete`}]},children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{children:`Dialog Title`}),(0,o.jsx)(`p`,{children:`This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states.`})]})}},u={args:{backButton:{label:`Tilbake`,onClick:()=>console.log(`Back clicked`)},pageMenu:{items:[{id:`1`,icon:n,title:`Del og gi tilgang`,as:`button`,onClick:()=>console.log(`Share clicked`)},{id:`2`,icon:r,title:`Marker som ulest`,href:`#mark-unread`},{id:`3`,icon:t,title:`Flytt til arkiv`,as:`button`,onClick:()=>console.log(`Archive clicked`)},{id:`4`,icon:i,title:`Flytt til papirkurv`,href:`#delete`}]},children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{children:`Dialog Title`}),(0,o.jsx)(`p`,{children:`This example mixes buttons and anchors. All items should have working hover states.`})]})}},d={args:{backButton:{label:`Tilbake`,onClick:()=>console.log(`Back clicked`)},pageMenu:{items:[{id:`1`,icon:n,title:`Del og gi tilgang`,as:`button`,onClick:()=>console.log(`Share clicked`)},{id:`2`,icon:r,title:`Marker som ulest`,as:`button`,onClick:()=>console.log(`Mark unread clicked`)},{id:`3`,icon:t,title:`Flytt til arkiv`,as:`button`,onClick:()=>console.log(`Archive clicked`)},{id:`4`,icon:i,title:`Flytt til papirkurv`,as:`button`,onClick:()=>console.log(`Delete clicked`)}]},children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{children:`Dialog Title`}),(0,o.jsx)(`p`,{children:`This example uses the base theme. Hover over the page menu buttons to test the hover states with the base theme.`})]})}},f={args:{backButton:{label:`Tilbake`,onClick:()=>console.log(`Back clicked`)},contextMenu:{items:[{id:`1`,label:`Alternativ 1`,onClick:()=>console.log(`Option 1 clicked`)},{id:`2`,label:`Alternativ 2`,onClick:()=>console.log(`Option 2 clicked`)}]},pageMenu:{items:[{id:`1`,icon:n,title:`Del og gi tilgang`,as:`button`,onClick:()=>console.log(`Share clicked`)},{id:`2`,icon:r,title:`Marker som ulest`,as:`button`,onClick:()=>console.log(`Mark unread clicked`)},{id:`3`,icon:t,title:`Flytt til arkiv`,as:`button`,onClick:()=>console.log(`Archive clicked`)},{id:`4`,icon:i,title:`Flytt til papirkurv`,as:`button`,onClick:()=>console.log(`Delete clicked`)}]},children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{children:`Dialog Title`}),(0,o.jsx)(`p`,{children:`This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover states.`})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`WithAnchors`,`MixedButtonsAndAnchors`,`WithBaseTheme`,`WithContextMenu`];export{c as Default,u as MixedButtonsAndAnchors,l as WithAnchors,d as WithBaseTheme,f as WithContextMenu,p as __namedExportsOrder,s as default};