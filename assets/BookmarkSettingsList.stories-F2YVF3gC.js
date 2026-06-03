import{a7 as t}from"./iframe-Dmn_-H53.js";import{B as a,u as n}from"./useBookmarks-D8s4v-m-.js";import{B as d}from"./BookmarkModal-BaR_TEvl.js";import{L as c}from"./Layout-DvbYw_k_.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B_9AoNot.js";import"./BookmarkSettingsItem-CpYpo8Tt.js";import"./QueryLabel-CUupVATa.js";import"./Plus-CqXOqTKR.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./SettingsItemBase-CYKWgdSM.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./ChevronUp-EToNysLX.js";import"./ChevronDown-VmG4T_9A.js";import"./ChevronRight-Wr9L-VUi.js";import"./ItemBase-C7SIy94-.js";import"./ItemLink-bXYHdO_H.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./Typography-BUxrbwUx.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./ContextMenu-CGD-TvHH.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./SearchField-DeTed8Dk.js";import"./FieldBase-BLinraZG.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuListHeading-BrW5zaeP.js";import"./MenuItem-C30u_q0-.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./MenuElipsisHorizontal-CvUsH0ZC.js";import"./Pencil--omKMKBe.js";import"./Trash-DbwGnQTy.js";import"./SettingsModal-DJ1z037I.js";import"./ModalBody-CxAozs8t.js";import"./Section-B0K1LM20.js";import"./Flex-Dt5U6DKy.js";import"./ButtonGroup-CPlQwmGd.js";import"./ButtonIcon-BdkdVYvg.js";import"./ButtonLabel-wmKbEjn1.js";import"./TextField-wUp0w9YU.js";import"./SkipLink-DVrtEER0.js";import"./Banner--oliSiSS.js";import"./GlobalHeader-sqQSfQze.js";import"./useIsDesktop-C8-Z1QBA.js";import"./GlobalAccountButton-BPzcPF_y.js";import"./Enter-DXYuFNDS.js";import"./GlobalMenuButton-_JOt59cv.js";import"./MenuHamburger-CSkbsTiY.js";import"./AccountSelector-syBXk5uc.js";import"./Switch-CBeHloo1.js";import"./AccountMenu-BPfdcptM.js";import"./GlobalMenu-CAozYphW.js";import"./ArrowUndo-bK1i10ui.js";import"./Globe-BayYtb16.js";import"./BreadcrumbsLink-atLnUGNI.js";import"./ArrowRight-CiYFyC7m.js";import"./Footer-8SNF8xbx.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
