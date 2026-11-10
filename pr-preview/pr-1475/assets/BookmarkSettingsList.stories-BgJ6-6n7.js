var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DV5agHf5.js";import{B as a,u as d}from"./useBookmarks-EpGdaREy.js";import{B as l}from"./BookmarkModal-uoCcuh2Q.js";import{L as u}from"./Layout-C3SfnO8o.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BBdwWh--.js";import"./BookmarkSettingsItem-rtYEpmsu.js";import"./QueryLabel-0gh9q1QW.js";import"./Plus-BR13EOsl.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./SettingsItemBase-CoibWoaE.js";import"./ItemMedia-K3xyGGVD.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./ChevronUp-CkyCCeXo.js";import"./ChevronDown-Brg3C2rz.js";import"./ChevronRight-DdV1IRY7.js";import"./ItemBase-CIH810RT.js";import"./ItemLink-CnSiS3gt.js";import"./ItemControls-Dpr02RM6.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./Typography-DklD6Rdi.js";import"./MagnifyingGlass-tTfHyx-p.js";import"./ContextMenu-pqpfeg2G.js";import"./useDropdownMenuController-BgPFU9Pq.js";import"./Dropdown-hdLzeqLa.js";import"./SearchField-DZ4t3H4v.js";import"./MenuListItem-CWjGfYeh.js";import"./MenuListDivider-B_yXfz6T.js";import"./MenuItem-0aaQQHkL.js";import"./CheckboxUncheckedIcon-B-IeYfRG.js";import"./RadioUncheckedIcon-DnY8WA8D.js";import"./ItemLabel-DMcOnD30.js";import"./FieldBase-D4-LzoRW.js";import"./Field-BelDBEf0.js";import"./Label-DXhZaYP8.js";import"./Input-CfHBGeL6.js";import"./InformationSquare-CpDw8TpS.js";import"./Pencil-DHgVxabF.js";import"./Trash-DJnUMrV2.js";import"./SettingsModal-CKmyGb9E.js";import"./ModalBody-DjOJuTHC.js";import"./Section-DqVAP5w4.js";import"./Flex-BRxWwGAq.js";import"./ButtonGroup-CmPYcscv.js";import"./ButtonIcon-Dul20VIj.js";import"./ButtonLabel-DsirOtXC.js";import"./TextField-DdFqi9DN.js";import"./SkipLink-LyrS11DA.js";import"./CookieBanner-DME2vTqP.js";import"./Link-tw3HlPU6.js";import"./Banner-BY-nOb9Q.js";import"./GlobalHeader-ahSxCkcv.js";import"./useIsDesktop-Dgf_ImB_.js";import"./GlobalAccountButton-BsGWGzNM.js";import"./Enter-CPudqAed.js";import"./GlobalMenuButton-BFSvdCC_.js";import"./MenuHamburger-sep3wvC_.js";import"./AccountSelector-CtVsCXWw.js";import"./Switch-Cdw3bZt4.js";import"./AccountMenu-Zc-XGeGF.js";import"./GlobalMenu-Dzylc3ME.js";import"./Checkmark-B_VJ15Sz.js";import"./ArrowUndo-CRPQURmv.js";import"./Globe-CSSNkPCg.js";import"./BreadcrumbsLink-BrtOGbrU.js";import"./ArrowRight-BgPN7dhI.js";import"./Footer-CE_xU-HV.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
