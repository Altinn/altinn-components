import{j as t}from"./iframe-CZMLD2fe.js";import{B as a,u as n}from"./useBookmarks-BRb_8s8O.js";import{L as c}from"./Layout-DQnnzWtu.js";import{B as d}from"./BookmarkModal-BInDqwSC.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DP-yJAQd.js";import"./QueryLabel-CdbQAGT7.js";import"./Plus-2Q0T7s3R.js";import"./useId-Dmu9AgSD.js";import"./Heading-5rlhad8Q.js";import"./index-iGjPLQV7.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./SettingsItemBase-C4lOIklE.js";import"./ChevronUp-C_Nv0CUA.js";import"./ChevronDown-Bjx7qU4A.js";import"./ChevronRight-7zRCvc5i.js";import"./ItemLink-D5-BdpwL.js";import"./ItemMedia-CE_zTi22.js";import"./XMark-BBRiAlI8.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./ItemControls-CSi2HZsx.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Typography-BegW4Ytw.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./ContextMenu-DZna9DPo.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Dropdown-Bx0d8Qo_.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./MenuElipsisHorizontal-C-D0tdFp.js";import"./SearchField-hPGSgF9W.js";import"./FieldBase-bsYRos9m.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./Checkmark-CgCD7cxb.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./Pencil-DuA10xP9.js";import"./Trash-CFAM7fxG.js";import"./SkipLink-Bfb9RqDO.js";import"./Banner-DbuB4eJf.js";import"./GlobalHeader-Bdoxbjrg.js";import"./useIsDesktop-DX1vl52f.js";import"./GlobalAccountButton-DltMrGPB.js";import"./Enter-B5HAdrS7.js";import"./GlobalMenuButton-BbcRNqJQ.js";import"./MenuHamburger-CM7Wkn6q.js";import"./AccountSelector-ScZw3yb8.js";import"./heading-BH75kNw6.js";import"./AccountMenu-CfO1iyk0.js";import"./Switch-k_GymHg0.js";import"./GlobalMenu-DqWSpTc_.js";import"./ArrowUndo-CgL76AqI.js";import"./Globe-BgtTiwhv.js";import"./BreadcrumbsLink-UczRN22v.js";import"./ArrowRight-DPzNdnaJ.js";import"./Footer-DNF3SlSL.js";import"./SettingsModal-BPOEW54D.js";import"./ModalBody-COFFml6R.js";import"./Section-B1dSFwPq.js";import"./Flex-oWhCvzqt.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonIcon-BscAx0sF.js";import"./ButtonLabel-k_kFU7aM.js";import"./TextField-DWuCPUHk.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
