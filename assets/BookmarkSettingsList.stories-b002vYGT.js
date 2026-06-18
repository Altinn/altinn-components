import{a7 as t}from"./iframe-DK-3qaH3.js";import{B as a,u as n}from"./useBookmarks-DrzRwXLw.js";import{B as d}from"./BookmarkModal-DWD5RMu-.js";import{L as c}from"./Layout-za07xPSl.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bn-ufHFt.js";import"./BookmarkSettingsItem-CNqXv1s3.js";import"./QueryLabel-C705qnjc.js";import"./Plus-CUtJiv66.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./SettingsItemBase-m7YyFG8T.js";import"./ItemMedia-SL7nkuf2.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./ChevronUp-Clh2aWfB.js";import"./ChevronDown-DHOBL84L.js";import"./ChevronRight-DR_DMSPj.js";import"./ItemBase-BM-aAa-z.js";import"./ItemLink-BKoe5vzb.js";import"./ItemControls-CxO-bUey.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./Typography-B48kpFr9.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./ContextMenu-DSn14Iqq.js";import"./useDropdownMenuController-CvLgPp7R.js";import"./Dropdown-PqayCWXB.js";import"./SearchField--OTsh4KX.js";import"./FieldBase-CZ_e8plx.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./InformationSquare-MLoftbJC.js";import"./MenuElipsisHorizontal-D8SBLf1r.js";import"./Pencil-CT0uIyH6.js";import"./Trash-CT5ztRaN.js";import"./SettingsModal-DUR2VTRq.js";import"./ModalBody-DZQNHHny.js";import"./Section-DmYaryGo.js";import"./Flex-BBCXBNec.js";import"./ButtonGroup-DGe-ZwJP.js";import"./ButtonIcon-CfGlO7so.js";import"./ButtonLabel-D_XAGhmx.js";import"./TextField-Cv5ThxSp.js";import"./SkipLink-BvzC-Wpl.js";import"./Banner-CbeZAjMD.js";import"./GlobalHeader-CFDgcWxf.js";import"./useIsDesktop-BSQHhrxG.js";import"./GlobalAccountButton-BU5q9YWA.js";import"./Enter-B9VAMW5w.js";import"./GlobalMenuButton-BX7pcybW.js";import"./MenuHamburger-Cf_ch3tL.js";import"./AccountSelector-LRgVrzxj.js";import"./Switch-B1M2WIXB.js";import"./AccountMenu-BNJzO9LN.js";import"./GlobalMenu-CGaNvQmU.js";import"./ArrowUndo-CrYWH9zi.js";import"./Globe-CA-i3fto.js";import"./BreadcrumbsLink-XlKumBTt.js";import"./ArrowRight-tgP-i77C.js";import"./Footer-DjZb6qbB.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
