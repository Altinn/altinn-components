import{j as t}from"./iframe-GJv3-kpe.js";import{B as a,u as n}from"./useBookmarks-Q04TGOP_.js";import{L as c}from"./Layout-CiJWqrM8.js";import{B as d}from"./BookmarkModal-DuvXEugl.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-2zHqBgYc.js";import"./QueryLabel-C4dr9Kep.js";import"./Plus-9DzdC6C4.js";import"./useId-B1GQrjht.js";import"./Heading-CiHDuood.js";import"./index-D19pPnAw.js";import"./useHighlightedText-ClfYglU-.js";import"./Skeleton-dVNdeapn.js";import"./SettingsItemBase-C5TELNS3.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./ItemLink-Pose4tqX.js";import"./ItemMedia-45ogcwRE.js";import"./XMark-D7blLnze.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./ItemControls-3C4JbZ3m.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Typography-XN79jGlV.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./ContextMenu-DR011-2b.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Dropdown-CFn-KtHz.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./MenuElipsisHorizontal-C_K0JSPh.js";import"./SearchField-D4OrqN5V.js";import"./FieldBase-D2hpNZAE.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./Checkmark-DXLqUvZZ.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./Pencil-qhcKZSlK.js";import"./Trash-CCKQd2Hf.js";import"./SkipLink-BP-D6HBa.js";import"./Banner-C96jgkCh.js";import"./GlobalHeader-CGqKj64U.js";import"./useIsDesktop-B-Z1HFB-.js";import"./GlobalAccountButton-DNoVd3Ny.js";import"./Enter-BP89yifq.js";import"./GlobalMenuButton-B64wgRml.js";import"./MenuHamburger-5Bxt9Ko4.js";import"./AccountSelector-C3yU2dxa.js";import"./heading-C_aN_g_L.js";import"./AccountMenu-sHkQdxNE.js";import"./Switch-DmKXGw5v.js";import"./GlobalMenu-DmtUYCXV.js";import"./ArrowUndo-DCdXG6nd.js";import"./Globe-CoSwJzs5.js";import"./BreadcrumbsLink-BPqwoo7D.js";import"./ArrowRight-No5z07YA.js";import"./Footer-CyLdrtET.js";import"./SettingsModal-BtcjVjo_.js";import"./ModalBody-C4Y7ExYH.js";import"./Section-BvBlt0Cn.js";import"./Flex-CxS25VqD.js";import"./ButtonGroup-CkGxccE7.js";import"./ButtonIcon-Bi2Ix8OH.js";import"./ButtonLabel-BZ1WKaDO.js";import"./TextField-Czkxag-i.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
