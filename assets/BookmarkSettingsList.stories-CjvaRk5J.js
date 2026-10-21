var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-CW69B4-4.js";import{B as n,u as d}from"./useBookmarks-C0ETsyEt.js";import{B as l}from"./BookmarkModal-CUTZn77V.js";import{L as u}from"./Layout-B_7nyMPO.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-bx75--uT.js";import"./BookmarkSettingsItem-DjcvIG5w.js";import"./QueryLabel-CeEvFdab.js";import"./Plus-BD6Fr9o4.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./SettingsItemBase-BSHBMMog.js";import"./ItemMedia-zpQSTqxO.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";import"./ChevronRight-CxFkThxw.js";import"./ItemBase-BB5MbWTj.js";import"./ItemLink-CAV-Z684.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./Typography-CD2WmtRN.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./ContextMenu-DeqMuVtu.js";import"./useDropdownMenuController-BBtpGQm9.js";import"./Dropdown-DTxBcaKX.js";import"./SearchField-LDFEPhQv.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./FieldBase-Cx7I1cae.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";import"./MenuElipsisHorizontal-CWvkIr-a.js";import"./Pencil-Br9aCNCN.js";import"./Trash-D4e6x_o2.js";import"./SettingsModal-Csmc-w-c.js";import"./ModalBody-DjVjmbs2.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./ButtonGroup-Bd6oXbKy.js";import"./ButtonIcon-DDkKoEB2.js";import"./ButtonLabel-DwtT3aqm.js";import"./TextField-CM3gnTYW.js";import"./SkipLink-z1B9lV1q.js";import"./CookieBanner-CjygE0LW.js";import"./Banner-sDPlm4fb.js";import"./GlobalHeader-CRHYSdkx.js";import"./useIsDesktop-DSB5VsnW.js";import"./GlobalAccountButton-CVWw2o_g.js";import"./Enter-BCK4qu55.js";import"./GlobalMenuButton-DOkB80LY.js";import"./MenuHamburger-CkzROnpS.js";import"./AccountSelector-BQ9ON5Hs.js";import"./Switch-D3R4G4XP.js";import"./AccountMenu-BU0exfrj.js";import"./GlobalMenu-G17RUCAu.js";import"./ArrowUndo-DP6Ao8AK.js";import"./Globe-CieDabaJ.js";import"./BreadcrumbsLink-BYR2umK4.js";import"./ArrowRight-DzvF-M15.js";import"./Footer-DSiwazAh.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
