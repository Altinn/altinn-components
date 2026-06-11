import{a7 as t}from"./iframe-CdYVD6SD.js";import{B as a,u as n}from"./useBookmarks-EAvA3cVA.js";import{B as d}from"./BookmarkModal-BwAX319l.js";import{L as c}from"./Layout-CZ_In_81.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CR8oLL1i.js";import"./BookmarkSettingsItem-Bl7TSMs6.js";import"./QueryLabel-D_HrqRTl.js";import"./Plus-CF5KtJsD.js";import"./Heading-Kaqd1h94.js";import"./useHighlightedText-DItA3cBY.js";import"./SettingsItemBase-CEWoePN9.js";import"./ItemMedia-BIl5Wxj2.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./ChevronUp-BrRMdaLP.js";import"./ChevronDown-C8P1GjsS.js";import"./ChevronRight-Dr5zJkhS.js";import"./ItemBase-KuqrX7JT.js";import"./ItemLink-CU-HlXOq.js";import"./ItemControls-vidWw2G8.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./Typography-Dba7VpUA.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./ContextMenu-Dh3e6JFy.js";import"./useDropdownMenuController-DJh2Guga.js";import"./Dropdown-BNNn4VPY.js";import"./SearchField-B_NM7GXp.js";import"./FieldBase-NvZtAXfB.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";import"./MenuElipsisHorizontal-BPjsS_Dz.js";import"./Pencil-gJ9af8rI.js";import"./Trash-Xory4lRl.js";import"./SettingsModal-oeTO1HA_.js";import"./ModalBody-BPE_VM4S.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./ButtonGroup-B-NgaNCB.js";import"./ButtonIcon-Cf34fIGP.js";import"./ButtonLabel-D6MSJXz4.js";import"./TextField-DOJrkQe9.js";import"./SkipLink-Cq8Mr_v_.js";import"./Banner-E-71tcaO.js";import"./GlobalHeader-BNaFizL7.js";import"./useIsDesktop-CGsWRej5.js";import"./GlobalAccountButton-rBopz-2t.js";import"./Enter-DyFWDY5O.js";import"./GlobalMenuButton-3a6h5dYA.js";import"./MenuHamburger-DVdV74ok.js";import"./AccountSelector-CJPB1L0a.js";import"./Switch-1ygURg1t.js";import"./AccountMenu-D6O9HHCN.js";import"./GlobalMenu-hyil8AaF.js";import"./ArrowUndo-Q9Mx-gbh.js";import"./Globe-BO9Vpc3p.js";import"./BreadcrumbsLink-BYbHpSOZ.js";import"./ArrowRight-Tr7SFlLA.js";import"./Footer-kqDHEZKV.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
