import{a7 as t}from"./iframe-C2dzRmjh.js";import{B as a,u as n}from"./useBookmarks-BF_XjjNY.js";import{B as d}from"./BookmarkModal-CSe2F2si.js";import{L as c}from"./Layout-BESVG-4a.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFtnvp_l.js";import"./BookmarkSettingsItem-5evQyLk4.js";import"./QueryLabel-DGxvVyOE.js";import"./Plus-CZi1FHk4.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./SettingsItemBase-D_m37hJE.js";import"./ItemMedia-BDW8lmrL.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./ChevronUp-DhNGyOn8.js";import"./ChevronDown-DT113Xv8.js";import"./ChevronRight-DtjNYNu3.js";import"./ItemBase-BbocD9fV.js";import"./ItemLink-DOi6qrEf.js";import"./ItemControls-dnLa86IT.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./Typography-DJs4mnKu.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./ContextMenu-C1mVo9es.js";import"./useDropdownMenuController-BTTkoYGq.js";import"./Dropdown-DtS9S0hY.js";import"./SearchField-uOvA63Zf.js";import"./FieldBase-Dvh5lIYF.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";import"./MenuListItem-4Fso0lef.js";import"./MenuListDivider-F2YAa9H7.js";import"./MenuListHeading-C9cVAuQ-.js";import"./MenuItem-BNIi9g5E.js";import"./Checkmark-BherDihq.js";import"./ItemLabel-dXZ3Y_Gg.js";import"./InformationSquare-D0pKd-n8.js";import"./MenuElipsisHorizontal-C1iYD589.js";import"./Pencil-Cmd5iEQR.js";import"./Trash-C6xIZZfI.js";import"./SettingsModal-BlxIbakF.js";import"./ModalBody-EYKNgO6y.js";import"./Section-DIoxVkTZ.js";import"./Flex-Cz2ESd29.js";import"./ButtonGroup-BU_SIQJX.js";import"./ButtonIcon-CeiijB1e.js";import"./ButtonLabel-BRr_e9Mc.js";import"./TextField-ZDeL-kQh.js";import"./SkipLink-DycDzkmp.js";import"./Banner-C1JDonv1.js";import"./GlobalHeader-CgjF-Eft.js";import"./useIsDesktop-hTAGJPDL.js";import"./GlobalAccountButton-1N-AzRUz.js";import"./Enter-DNhLgdXe.js";import"./GlobalMenuButton-C_EX7h5n.js";import"./MenuHamburger-oqzJhj6q.js";import"./AccountSelector-DavzJPA3.js";import"./Switch-CzhDNOrG.js";import"./AccountMenu-hJwrNsx7.js";import"./GlobalMenu-B8dwTLwb.js";import"./ArrowUndo-e1ZOBjb3.js";import"./Globe-CoJRMQ-v.js";import"./BreadcrumbsLink-BQ_7q1hg.js";import"./ArrowRight-DkZaDrOS.js";import"./Footer-GfBJUugl.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
