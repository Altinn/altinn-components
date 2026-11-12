var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CrglqwQn.js";import{B as a,u as d}from"./useBookmarks-Bt6sjL9C.js";import{B as l}from"./BookmarkModal-CNvtfcNI.js";import{L as u}from"./Layout-BtmXYADp.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-8J-CXIB0.js";import"./BookmarkSettingsItem-C-kA3N5R.js";import"./QueryLabel-DgoptpUX.js";import"./Plus-BsVWtc_l.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./SettingsItemBase-Bf_BtRXv.js";import"./ItemMedia-CKHqoxmK.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./ChevronUp-fcfSgUs-.js";import"./ChevronDown-qCwX9ScZ.js";import"./ChevronRight-DGfPuTVb.js";import"./ItemBase-iw1hi8n1.js";import"./ItemLink-DXjQtoHW.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./Typography-BczTYRHT.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./ContextMenu-Bpxx0kh4.js";import"./useDropdownMenuController-WGsW3heI.js";import"./useIsDesktop-BFXmchO7.js";import"./Dropdown-Bs8XHg5O.js";import"./SearchField-C2qhyCtD.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemLabel-C8AtzUlo.js";import"./FieldBase-B81pLsMF.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./InformationSquare-BOQji3ZT.js";import"./Pencil-DRqCWXGy.js";import"./Trash-D8Yx43MO.js";import"./SettingsModal-Nr6jK-S2.js";import"./ModalBody-ywYcZdTp.js";import"./Section-DbuH07eX.js";import"./Flex-DJ9jSUVh.js";import"./ButtonGroup-DBlS54nG.js";import"./ButtonIcon-CR0jjdG5.js";import"./ButtonLabel-DUOJn9GW.js";import"./TextField-NIMGtDGP.js";import"./SkipLink-dW7OoA73.js";import"./CookieBanner-DuM_xTLh.js";import"./Link-Chsrp-ow.js";import"./Banner-CO4ulxs9.js";import"./GlobalHeader-IkXOnXah.js";import"./GlobalAccountButton-DM1YrGJI.js";import"./Enter-zEk9kRFx.js";import"./GlobalMenuButton-Gdg78j4Y.js";import"./MenuHamburger-Co7zqsTV.js";import"./AccountSelector-BNOyXtGS.js";import"./Switch-CWx3MDUl.js";import"./AccountMenu-BL-n-r0X.js";import"./GlobalMenu-DWjDb7fh.js";import"./Checkmark-D7BkIwSo.js";import"./ArrowUndo-B915tdkI.js";import"./Globe-KdSZmZPM.js";import"./BreadcrumbsLink-Bbwo0LYF.js";import"./ArrowRight-CwRhQGdr.js";import"./Footer-D5l3ArAx.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
