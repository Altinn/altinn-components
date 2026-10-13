import{a7 as t}from"./iframe-BidFzEoe.js";import{B as a,u as n}from"./useBookmarks-BjH-FE4d.js";import{B as d}from"./BookmarkModal-D8iri1q7.js";import{L as c}from"./Layout-CAx9I1ic.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BgtGmMWX.js";import"./BookmarkSettingsItem-CO9KxxCq.js";import"./QueryLabel-qqGQLvyU.js";import"./Plus-CSCOqkzm.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./SettingsItemBase-CtYPnu_3.js";import"./ItemMedia-DzAOMVpV.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./ChevronRight-B3flyXKQ.js";import"./ItemBase-mIr4q6rQ.js";import"./ItemLink-C3ysbGvA.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./Typography-BKRo6hXJ.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./ContextMenu-Cdisi90L.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./SearchField-CPTH-dMf.js";import"./FieldBase-q2Ok1lDz.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./InformationSquare-B1R5HfkF.js";import"./MenuElipsisHorizontal-BhNI2fK5.js";import"./Pencil-D1nIasGH.js";import"./Trash-C23skxme.js";import"./SettingsModal-Lyf15yKp.js";import"./ModalBody-BGmAjdb1.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./ButtonGroup-BDN4dAIH.js";import"./ButtonIcon-BtY_BXUj.js";import"./ButtonLabel-ym8yEuVp.js";import"./TextField-mKP-hw_s.js";import"./SkipLink-COreVlY2.js";import"./CookieBanner-DEV0FYTb.js";import"./Banner-DCdYuMmA.js";import"./GlobalHeader-D1MHX3-T.js";import"./useIsDesktop-BByF6i9k.js";import"./GlobalAccountButton-C3gkEtyl.js";import"./Enter-CW4T_Zkd.js";import"./GlobalMenuButton-Cj1DPElc.js";import"./MenuHamburger-LvFc9XlM.js";import"./AccountSelector-FENHL-hW.js";import"./Switch-Ip2cuLJk.js";import"./AccountMenu-fTIvtAv1.js";import"./GlobalMenu-Byt-GCQY.js";import"./ArrowUndo-CcknOss5.js";import"./Globe-CT8tZHs-.js";import"./BreadcrumbsLink-BjaXo9b0.js";import"./ArrowRight-B6fMiaoa.js";import"./Footer-BZTJiDjO.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
