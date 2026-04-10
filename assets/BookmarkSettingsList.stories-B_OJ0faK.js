import{j as t}from"./iframe-CfpleAaJ.js";import{B as a,u as n}from"./useBookmarks-fHK_wuTR.js";import{L as c}from"./Layout-BH1WVN0U.js";import{B as d}from"./BookmarkModal-6sJwzb0W.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Buw28yn5.js";import"./index-C-ZlSrx2.js";import"./SettingsSection-CShbRmzY.js";import"./Section-BT3IVwl3.js";import"./BookmarkSettingsItem-ChTNZAFu.js";import"./QueryLabel-CqYLOKtC.js";import"./Plus-Bt3Z18iu.js";import"./useId-CRfl8v3D.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./Skeleton-mkQz_xZ6.js";import"./SettingsItemBase-P2wKn9AB.js";import"./ListItem-BnFFeCbH.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./XMark-Mr05NtnF.js";import"./Icon-DFklvQ48.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Badge-BZbseZdr.js";import"./ChevronUp-C1m4sJ12.js";import"./ChevronDown-QoYlkrAl.js";import"./ChevronRight-F6vNJ-SN.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./ContextMenu-D_1W5NW4.js";import"./useDropdownMenuController-D3ykFK6E.js";import"./Dropdown-C9n-MsJ3.js";import"./Tooltip-Da4m4fbj.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-cOqlEhU8.js";import"./SearchField-DaxLmgu-.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Checkmark-CwtLsQnH.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./List-Daw1OOj7.js";import"./Divider-DzmWM7JQ.js";import"./Pencil-CY1Ltv5n.js";import"./Trash-CK0t-M2f.js";import"./SkipLink-DKy9rzMY.js";import"./GlobalHeader-C_i0cMzH.js";import"./useIsDesktop-Cz6jl_Dv.js";import"./GlobalAccountButton-BEAYnfY5.js";import"./Enter-COC0SUV1.js";import"./GlobalMenuButton-CAv-eK8b.js";import"./MenuHamburger-CyesAGLw.js";import"./AccountSelector-BreEqaAz.js";import"./heading-seeqnAgq.js";import"./AccountMenu-DvrZYTKA.js";import"./Switch-jyXztMT7.js";import"./GlobalMenu-DsGTEJ7w.js";import"./ArrowUndo-DqxrSKWI.js";import"./Globe-BBA1moor.js";import"./LocaleSwitcher-BGWb1ikz.js";import"./DigdirLogomark-CmEhK8Ul.js";import"./SearchbarField-CoV9GIfb.js";import"./AutocompleteItem-Dt_cijtX.js";import"./DropdownBase-ZJ1_uQd-.js";import"./useClickOutside-540iRY_5.js";import"./GlobalMenuButton-krHf6JZO.js";import"./PadlockLocked-DXpwFlf5.js";import"./ButtonLabel-Dr2RfoaG.js";import"./ButtonIcon-C5_cwnJG.js";import"./BreadcrumbsLink-BuBxxyAj.js";import"./ArrowRight-mOwt7zhI.js";import"./Footer-CehUNMeI.js";import"./SettingsModal-Dv0AM5pv.js";import"./ModalBase-BZf314E6.js";import"./ModalBody-BFcSEnBf.js";import"./ButtonGroup-BCc6e8WW.js";import"./TextField-BJh9knYm.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
