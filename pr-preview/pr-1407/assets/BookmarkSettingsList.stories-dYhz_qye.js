var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-k-5ppgch.js";import{B as a,u as d}from"./useBookmarks-Dbj5_lJa.js";import{B as l}from"./BookmarkModal-CNZqQN0k.js";import{L as u}from"./Layout-DEaVutfL.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DQYhP48A.js";import"./BookmarkSettingsItem-DGb1iVhe.js";import"./QueryLabel-DVaeMmMn.js";import"./Plus-BfzF3o2K.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./SettingsItemBase-DZxwsjoE.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";import"./ChevronRight-CDNE03o8.js";import"./ItemBase-C_ikRmi3.js";import"./ItemLink-CIk1xtvG.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./Typography-CYRWqnkB.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./ContextMenu-3vKarXaG.js";import"./useDropdownMenuController-OiRVKnjj.js";import"./Dropdown-CPtynmaA.js";import"./SearchField-BRPq9oj8.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemLabel-D5iTgQt_.js";import"./FieldBase-CXS3Sevu.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";import"./MenuElipsisHorizontal-B7A4Qcki.js";import"./Pencil-uv3xQJ9k.js";import"./Trash-D-Jav_7z.js";import"./SettingsModal-C25gVZ6b.js";import"./ModalBody-CIuqRrmc.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./ButtonGroup-B2jA2Tqh.js";import"./ButtonIcon-w0mUwAgm.js";import"./ButtonLabel-CaO7Cf6Y.js";import"./TextField-DwcD3VdB.js";import"./SkipLink-jAF_koBc.js";import"./CookieBanner-y5xuM2-F.js";import"./Link-D3USK1B-.js";import"./Banner-Bhw_pIWR.js";import"./GlobalHeader-C2pwYy4F.js";import"./useIsDesktop-BKfbiGbl.js";import"./GlobalAccountButton-DvMbKPo6.js";import"./Enter-DygFgs-7.js";import"./GlobalMenuButton-lXuJLn7R.js";import"./MenuHamburger-Bo7vD2QW.js";import"./AccountSelector-CaKr1Ruk.js";import"./Switch-Dxi_T-X1.js";import"./AccountMenu-Cczy76kt.js";import"./GlobalMenu-rI0p574d.js";import"./Checkmark-F2mBpe6M.js";import"./ArrowUndo-B3MWpO9H.js";import"./Globe-CPlScfnn.js";import"./BreadcrumbsLink-DlHMKow1.js";import"./ArrowRight-B0kRBzSw.js";import"./Footer-B5aadUGx.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),qo=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,qo as __namedExportsOrder,Oo as default};
