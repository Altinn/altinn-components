import{a7 as t}from"./iframe-DzC97elN.js";import{B as a,u as n}from"./useBookmarks-C7zzmH_Y.js";import{B as d}from"./BookmarkModal-CnihOMlS.js";import{L as c}from"./Layout-LwIb5n_S.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BjgtGKwv.js";import"./BookmarkSettingsItem-D5d_RliV.js";import"./QueryLabel-Cfhsi1iU.js";import"./Plus-CcwlUJc-.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./SettingsItemBase-DNgPJ9Wa.js";import"./ItemMedia-BZutnkw1.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./ItemBase-IHm1UMeF.js";import"./ItemLink-DWCmLscF.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./Typography-CtPp6NJn.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./ContextMenu-DV3SzXR2.js";import"./useDropdownMenuController-w-DqwR3B.js";import"./Dropdown-BeW3qmVa.js";import"./SearchField-D-nsUeta.js";import"./FieldBase-CCQqXbf-.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./MenuElipsisHorizontal-CCv4JH7o.js";import"./Pencil-D5mHhLGr.js";import"./Trash-CQFpGbne.js";import"./SettingsModal-B-gWkeFY.js";import"./ModalBody-CsfaIftq.js";import"./Section-B7XqZvfR.js";import"./Flex-CXtmXiNa.js";import"./ButtonGroup-BbJZX9rk.js";import"./ButtonIcon-QQ_ZbP2-.js";import"./ButtonLabel-D7hHDrz9.js";import"./TextField-PmhDe6m1.js";import"./SkipLink-y88aaf3q.js";import"./Banner-C2Inp0At.js";import"./GlobalHeader-DKxsGyRA.js";import"./useIsDesktop-CeAKLIl5.js";import"./GlobalAccountButton-BbhWzELj.js";import"./Enter-C8NWLzit.js";import"./GlobalMenuButton-CDedrrkY.js";import"./MenuHamburger-BRGi738L.js";import"./AccountSelector-SPH3qZZ4.js";import"./Switch-JfrAs-Bf.js";import"./AccountMenu-DqYEsx_-.js";import"./GlobalMenu-BRnykkmv.js";import"./ArrowUndo-8H_Vm8H2.js";import"./Globe-XbmWHGjJ.js";import"./BreadcrumbsLink-Dz7paneK.js";import"./ArrowRight-DoT43tsN.js";import"./Footer-A52M92Dj.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
