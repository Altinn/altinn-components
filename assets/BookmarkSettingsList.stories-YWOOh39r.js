import{a7 as t}from"./iframe-Drliw4W2.js";import{B as a,u as n}from"./useBookmarks-DhUFNo3F.js";import{B as d}from"./BookmarkModal-Duk_C2OR.js";import{L as c}from"./Layout-DR6c-sBP.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DH_c0Y1A.js";import"./BookmarkSettingsItem-Di8P90VD.js";import"./QueryLabel-o76d4cqm.js";import"./Plus-gkf6Iyzi.js";import"./Heading-CnkMiV4w.js";import"./useHighlightedText-Cu370CX4.js";import"./SettingsItemBase--mansMbz.js";import"./ItemMedia-BONexNJs.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./ChevronUp-W1N7Dm2d.js";import"./ChevronDown-CG1jtrk-.js";import"./ChevronRight-_-mAy6yU.js";import"./ItemBase-Dw5k1qmp.js";import"./ItemLink-QPNf1VCw.js";import"./ItemControls-CQnobUv3.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./Typography-DpltYWx0.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./ContextMenu-XpuA0EJC.js";import"./useDropdownMenuController-CymhG5YZ.js";import"./Dropdown-B9PzuGtE.js";import"./SearchField-42vl3Hhr.js";import"./FieldBase-XimphOI7.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./MenuListHeading-B-ydP8rv.js";import"./MenuItem-CDxKhji-.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./InformationSquare-DpTm6Ali.js";import"./MenuElipsisHorizontal-kdZIghGy.js";import"./Pencil-CDYcyaue.js";import"./Trash-fPJYexBH.js";import"./SettingsModal-CQf4QPbv.js";import"./ModalBody-Dclc077g.js";import"./Section-zMN4ePg0.js";import"./Flex-Bge8S33P.js";import"./ButtonGroup-DIwL-jQY.js";import"./ButtonIcon-BqRKOYIO.js";import"./ButtonLabel-CL7OHOIR.js";import"./TextField-CNxBSA0P.js";import"./SkipLink-BvrqIpyv.js";import"./CookieBanner-BhdibEE9.js";import"./Banner-BN6oXf39.js";import"./GlobalHeader-CPKyRfMr.js";import"./useIsDesktop-Bmf7BMoP.js";import"./GlobalAccountButton-DDw3A2Zm.js";import"./Enter-_LQqEQi1.js";import"./GlobalMenuButton-_lDMTFos.js";import"./MenuHamburger-YQBN9hOo.js";import"./AccountSelector-BnJaxYgx.js";import"./Switch-URXOOyUb.js";import"./AccountMenu-BVuUgrcV.js";import"./GlobalMenu-Dtp5A9OO.js";import"./ArrowUndo-CD_-IZUE.js";import"./Globe-BtL0zoxt.js";import"./BreadcrumbsLink-DetwcVV_.js";import"./ArrowRight-y6U1LVbM.js";import"./Footer-D2QVzHQL.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
