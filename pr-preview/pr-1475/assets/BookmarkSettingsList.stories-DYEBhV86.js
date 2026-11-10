var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CFooeFlc.js";import{B as a,u as d}from"./useBookmarks-D0a3c0rr.js";import{B as l}from"./BookmarkModal-CLi5w-Yt.js";import{L as u}from"./Layout-BlHJit78.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bq9-gO9j.js";import"./BookmarkSettingsItem-CiVDaVLE.js";import"./QueryLabel-CrP2lDdF.js";import"./Plus-uOOnNtuS.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./SettingsItemBase-BAljSDAd.js";import"./ItemMedia-BiITU9Jf.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./ChevronUp-2AABqykr.js";import"./ChevronDown-DRjCt-FM.js";import"./ChevronRight-Pp6aFK2W.js";import"./ItemBase-DLuyWZHy.js";import"./ItemLink-CYYhjNlX.js";import"./ItemControls-a2iPy1rh.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./Typography-DZMMTX6d.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./ContextMenu-DoDNTdiW.js";import"./useDropdownMenuController-D2ORC09B.js";import"./Dropdown-UxeuVY1V.js";import"./SearchField-vc2j7DYW.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemLabel-uOYlRqGI.js";import"./FieldBase--dF0uMSe.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./InformationSquare-CkGSwppR.js";import"./Pencil-DLJm7cTM.js";import"./Trash-RDp0u5kC.js";import"./SettingsModal-DXbxrgRv.js";import"./ModalBody-DNdyJsNZ.js";import"./Section-Dn7ldTEr.js";import"./Flex-DvJJETpK.js";import"./ButtonGroup-B1Q8fC_M.js";import"./ButtonIcon-CPVBizt7.js";import"./ButtonLabel-XFoSX1pU.js";import"./TextField-DSwS7d_E.js";import"./SkipLink-CvhSBmX4.js";import"./CookieBanner-gpoAWfQo.js";import"./Link-CAZN9a6X.js";import"./Banner-veWYbJJ0.js";import"./GlobalHeader-CAxn3FbR.js";import"./useIsDesktop-DMKYuN7Q.js";import"./GlobalAccountButton-CxUertbH.js";import"./Enter-Bl8n-sGa.js";import"./GlobalMenuButton-BefVXzoE.js";import"./MenuHamburger-BBOi02AU.js";import"./AccountSelector-B4QhyC5f.js";import"./Switch-XnFFT3OB.js";import"./AccountMenu-CyQLONBq.js";import"./GlobalMenu-D8aETKbm.js";import"./Checkmark-CL0UyCZk.js";import"./ArrowUndo-Bq7mvHQO.js";import"./Globe-ASfh3ELd.js";import"./BreadcrumbsLink-DQSRC3y-.js";import"./ArrowRight-CiUYzs3Y.js";import"./Footer-B1HwsH9k.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
