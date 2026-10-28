var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-zDfzPjQ-.js";import{B as a,u as d}from"./useBookmarks-xOTeu01T.js";import{B as l}from"./BookmarkModal-BMyw1JuD.js";import{L as u}from"./Layout-vglnJcol.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1ILj_Qw.js";import"./BookmarkSettingsItem-0Zt3LlcI.js";import"./QueryLabel-BhJDTunj.js";import"./Plus-CbNnKwCf.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./SettingsItemBase-Ci6e4bQP.js";import"./ItemMedia-C2cNA_4j.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";import"./ItemBase-CBBaiBDD.js";import"./ItemLink-C2Q5plIG.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./Typography-D20OWptm.js";import"./MagnifyingGlass-D8qauCMU.js";import"./ContextMenu-Bewy7zPd.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./SearchField-BRYpM6iz.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./FieldBase-DhhNDbiD.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./MenuElipsisHorizontal-BZuKIlkb.js";import"./Pencil-DrjGlKF5.js";import"./Trash-BQPU0aQd.js";import"./SettingsModal-fD6tePd9.js";import"./ModalBody-BmMBPQXf.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonIcon-Ck0HIEFU.js";import"./ButtonLabel-lbb0L__I.js";import"./TextField-BRWr-P52.js";import"./SkipLink-B0UTbIld.js";import"./CookieBanner--YWLAuhK.js";import"./Link-CuRpULv0.js";import"./Banner-BTGqFQQN.js";import"./GlobalHeader-BcYMQlI_.js";import"./useIsDesktop-CHtQ0585.js";import"./GlobalAccountButton-O-pPWwwx.js";import"./Enter-DgRxpL9L.js";import"./GlobalMenuButton-CfqvwCN8.js";import"./MenuHamburger-BTQ1djkk.js";import"./AccountSelector-BlqOghqB.js";import"./Switch-DIWrH6AQ.js";import"./AccountMenu-SuH1iVbF.js";import"./GlobalMenu-DP6fa-WF.js";import"./ArrowUndo-DTnO_IVt.js";import"./Globe-EZ3f66Yc.js";import"./BreadcrumbsLink-D_kHep3B.js";import"./ArrowRight-Ce_4bhkg.js";import"./Footer-BbNaOC5C.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
