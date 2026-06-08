import{a7 as t}from"./iframe-B0WoJH5H.js";import{B as a,u as n}from"./useBookmarks-77uBHY7S.js";import{B as d}from"./BookmarkModal-B7HnsgCr.js";import{L as c}from"./Layout-DGCVZQKH.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BEojsPyg.js";import"./BookmarkSettingsItem-CILLGf9r.js";import"./QueryLabel-CxmOVo7Q.js";import"./Plus-teIaH_CW.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./SettingsItemBase-Cg45bGiH.js";import"./ItemMedia-BWZiVBkm.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./ChevronUp-DUEhyOAc.js";import"./ChevronDown-BDG9HWsL.js";import"./ChevronRight-DJgUHhg2.js";import"./ItemBase-Dt0njuns.js";import"./ItemLink-Dz1AGHgC.js";import"./ItemControls-AxIj9K4z.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./Typography-BsE1w5gb.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./ContextMenu-Bjez-tdT.js";import"./useDropdownMenuController-CzjMq5Jo.js";import"./Dropdown-trRXYlHt.js";import"./SearchField-B4XHRk25.js";import"./FieldBase-HmzGYXkl.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./MenuElipsisHorizontal-rgMWcXSh.js";import"./Pencil-bvZ5ZkyK.js";import"./Trash-CO6lVbOZ.js";import"./SettingsModal-DtxkL7rE.js";import"./ModalBody-B-In6huT.js";import"./Section-BK9NUwy5.js";import"./Flex-DKCofw-s.js";import"./ButtonGroup-DflqcQYY.js";import"./ButtonIcon-CONSvMyE.js";import"./ButtonLabel-DlvTy_Eu.js";import"./TextField-Di7KSSZ3.js";import"./SkipLink-LmebWvIJ.js";import"./Banner-D4f37DfM.js";import"./GlobalHeader-B0T11nh9.js";import"./useIsDesktop-BaLceTDX.js";import"./GlobalAccountButton-Dc0u35gL.js";import"./Enter-BHXFCvcD.js";import"./GlobalMenuButton-BkQpp6do.js";import"./MenuHamburger-B-sBFcFJ.js";import"./AccountSelector-B1Wfa091.js";import"./Switch-C4u2FFt0.js";import"./AccountMenu-CZ5u86yO.js";import"./GlobalMenu-BLzK7Uw6.js";import"./ArrowUndo-CQUYnDVr.js";import"./Globe-CURRM6pv.js";import"./BreadcrumbsLink-DpOnqGiT.js";import"./ArrowRight-D_Xst9rm.js";import"./Footer-CCgWVmVA.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
