import{j as t}from"./iframe-CXxOXnma.js";import{B as a,u as n}from"./useBookmarks-BC4C57Lv.js";import{L as c}from"./Layout-DCmxr7eT.js";import{B as d}from"./BookmarkModal-C4cVVEB-.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-D0FHKmsR.js";import"./QueryLabel-sjyVTaOI.js";import"./Plus-52Qbrw3J.js";import"./useId-CYy4MNIP.js";import"./Heading-CD_Q6pfI.js";import"./index-DvzmMrBu.js";import"./useHighlightedText-Cggf4nMP.js";import"./Skeleton-DaZzKoDP.js";import"./SettingsItemBase-hOyKlpdl.js";import"./ChevronUp-C7KI3ypM.js";import"./ChevronDown-BI53cl-V.js";import"./ChevronRight-fDr-lddl.js";import"./ItemLink-pXD4ggni.js";import"./ItemMedia-BJW132yJ.js";import"./XMark-DvGwYctt.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Icon-CyU2k-nr.js";import"./ItemControls-D969--fk.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./tooltip-F-8CLWbq.js";import"./Typography-4yj_ylkx.js";import"./MagnifyingGlass-D50FbQFC.js";import"./ContextMenu-DWu5Hmy2.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Dropdown-Dq-7A4eI.js";import"./Button-Dot-dF6F.js";import"./MenuElipsisHorizontal-Bm1EICSF.js";import"./SearchField-Bi4ovUnL.js";import"./FieldBase-DpHGffp6.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./Checkmark-CEwGjLXr.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./Pencil-DrJM1et2.js";import"./Trash-BwBqKSjv.js";import"./SkipLink-Bo67VXjd.js";import"./Banner-Dn2nCm-1.js";import"./GlobalHeader-CD0sKbkW.js";import"./useIsDesktop-pfWHUBPv.js";import"./GlobalAccountButton-CuYPQP23.js";import"./Enter-CyUcFaj8.js";import"./GlobalMenuButton-CxUAm5oj.js";import"./MenuHamburger-Bx8_EIQG.js";import"./AccountSelector-BcrBLiy8.js";import"./AccountMenu-D-yy8Rg8.js";import"./Switch-DRnJSCoi.js";import"./GlobalMenu-C56XjE_p.js";import"./ArrowUndo-DZKfGOMJ.js";import"./Globe-B40PJNFA.js";import"./BreadcrumbsLink-vli8n6TE.js";import"./ArrowRight-BEJaF5VH.js";import"./Footer-l6ewZks1.js";import"./SettingsModal-BLUe9oqE.js";import"./ModalBody-JOibBxNi.js";import"./Section-BI582Rxy.js";import"./Flex-Cdw8i_ge.js";import"./ButtonGroup-DA7guRJP.js";import"./ButtonIcon-DRTRl_zA.js";import"./ButtonLabel-BtrlG-5t.js";import"./TextField-Q7sM8aCe.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
