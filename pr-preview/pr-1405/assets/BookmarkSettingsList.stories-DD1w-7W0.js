import{a7 as t}from"./iframe-C7-WWuUz.js";import{B as a,u as n}from"./useBookmarks-etXRitSc.js";import{B as d}from"./BookmarkModal-CmPDLf8p.js";import{L as c}from"./Layout-DIXbiTlz.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-pD-uRv9Z.js";import"./BookmarkSettingsItem-USXr686L.js";import"./QueryLabel-DcDKTr7k.js";import"./Plus-0EP1hD2t.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./SettingsItemBase-DnWXbaDd.js";import"./ItemMedia-CBTlpYQC.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./ChevronUp-DrJugmYh.js";import"./ChevronDown-BuDxjQRv.js";import"./ChevronRight-C0CFQIi6.js";import"./ItemBase-BJnhhU79.js";import"./ItemLink-BTuXD-4h.js";import"./ItemControls-Bq7352tZ.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./Typography-BeOUX7s0.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./ContextMenu-BbEo5NVP.js";import"./useDropdownMenuController-CONOWsYf.js";import"./Dropdown-3ZYKEzsd.js";import"./SearchField-B35ZfRWV.js";import"./FieldBase-V8CxIyK2.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuListDivider-FRFmhjs8.js";import"./MenuListHeading-BO147Bx-.js";import"./MenuItem-kril0LwU.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./InformationSquare-B8uck3iJ.js";import"./MenuElipsisHorizontal-Ds_8eBX8.js";import"./Pencil-2qZWDZUi.js";import"./Trash-CI7Eo6ji.js";import"./SettingsModal-CguPlHuS.js";import"./ModalBody-fYRi36Hl.js";import"./Section-D_PXiQbH.js";import"./Flex-C-tyhriT.js";import"./ButtonGroup-Bf7xvvo6.js";import"./ButtonIcon-BsmUmo_Y.js";import"./ButtonLabel-CdWukQKX.js";import"./TextField-D9UMCTaw.js";import"./SkipLink-C10n5deD.js";import"./CookieBanner-Dqir6s-3.js";import"./Banner-CEgVlJCV.js";import"./GlobalHeader-Irv8IwSt.js";import"./useIsDesktop-BO3ypbFb.js";import"./GlobalAccountButton-BH_ckUBo.js";import"./Enter-CeJcfmZn.js";import"./GlobalMenuButton-C2qNbC_k.js";import"./MenuHamburger-C7i5GpCo.js";import"./AccountSelector-Bu1LZWRw.js";import"./Switch-DS82YZ2E.js";import"./AccountMenu-FX98JFSa.js";import"./GlobalMenu-BP7yPdzZ.js";import"./ArrowUndo-DA-0LlcY.js";import"./Globe-CH73ipzD.js";import"./BreadcrumbsLink-EkGWZDE-.js";import"./ArrowRight-FMDeHOzK.js";import"./Footer-zFs8rlyI.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
