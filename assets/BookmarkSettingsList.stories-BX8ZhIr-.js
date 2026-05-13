import{j as t}from"./iframe-CpLxKnDM.js";import{B as a,u as n}from"./useBookmarks-Dlbz-C6i.js";import{L as c}from"./Layout-hF90-psv.js";import{B as d}from"./BookmarkModal-CI-7YDiq.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DG-_izy_.js";import"./QueryLabel-CbkMDprd.js";import"./Plus-7ibbtH5p.js";import"./useId-Dk2QO8VQ.js";import"./Heading-Dmt1Hp0l.js";import"./index-BZrYlxzi.js";import"./useHighlightedText-De1FlINf.js";import"./Skeleton-B2kLb9z1.js";import"./SettingsItemBase-BBwYFpce.js";import"./ChevronUp-CGssbGWN.js";import"./ChevronDown-_hDUIJMX.js";import"./ChevronRight-16z1B_cb.js";import"./ItemLink-BTrHhqHl.js";import"./ItemMedia-DT3PutY3.js";import"./XMark-BkFwP2BW.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./ItemControls-SBEzslTa.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Typography-jv3_dxzw.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./ContextMenu-6xw2WymN.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Dropdown-gyW_V0cZ.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./MenuElipsisHorizontal-BwK0VJ96.js";import"./SearchField-DF0MNejq.js";import"./FieldBase-zLQdXhmX.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./Checkmark-DpqhZdZ_.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./Pencil-CbE1h61X.js";import"./Trash-0aRAlmkw.js";import"./SkipLink-DBaD5yd5.js";import"./Banner-BtlLQf4G.js";import"./GlobalHeader-DULc9E0I.js";import"./useIsDesktop-BFm1-w7T.js";import"./GlobalAccountButton-DrDdTFcN.js";import"./Enter-tjtY-HGz.js";import"./GlobalMenuButton-DhwIsNNu.js";import"./MenuHamburger-BOYVbGjH.js";import"./AccountSelector-Bibv_1fU.js";import"./heading-CJ3erF7t.js";import"./AccountMenu-C3jEvLzU.js";import"./Switch-DtDZT1hR.js";import"./GlobalMenu-CypodvRE.js";import"./ArrowUndo-kJzW9ldV.js";import"./Globe-C7BiUSRN.js";import"./BreadcrumbsLink-CINDBRb6.js";import"./ArrowRight-D1EGWhkX.js";import"./Footer-Cx8C_M8i.js";import"./SettingsModal-7lvDMQRR.js";import"./ModalBody-DeQjF_gb.js";import"./Section-cnHf2d7L.js";import"./Flex-DdRay9SF.js";import"./ButtonGroup-MGSBAJb-.js";import"./ButtonIcon-BTCRLLcP.js";import"./ButtonLabel-BNjF5oc8.js";import"./TextField-Bj7KcJb8.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
