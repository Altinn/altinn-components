import{j as t}from"./iframe-0B_Yudin.js";import{B as a,u as n}from"./useBookmarks-B4jjdqvN.js";import{L as c}from"./Layout-HHY59kNX.js";import{B as d}from"./BookmarkModal-DQ-hYXXf.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CcsVAtXA.js";import"./index-bzqtFzN_.js";import"./SettingsSection-D6rTmT22.js";import"./Section-byNAOZ7t.js";import"./BookmarkSettingsItem-Ci50V-sX.js";import"./QueryLabel-Dxn51UAp.js";import"./Plus-BmqtHu8-.js";import"./useId-BUxMg0Ir.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./Skeleton-CCW5QxrE.js";import"./SettingsItemBase-CPL8qCc4.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";import"./ItemLink-BmeT6DsA.js";import"./ItemMedia-DPzqoyVf.js";import"./XMark-4vnuAWTz.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./ItemControls-DGPFdAX4.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Typography-WSorE15D.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./ContextMenu-CnWikKRV.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Dropdown-Ceu59hlm.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./MenuElipsisHorizontal-Brw3IxFk.js";import"./SearchField-aP7iZ-N9.js";import"./FieldBase-BRRzaSEH.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./Checkmark-BmAdxrUQ.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./List-BxubJ1l7.js";import"./ListItem-DnHiZFTT.js";import"./Divider-DZtdoQqC.js";import"./Pencil-ByhlV4aA.js";import"./Trash-C5AYfDtF.js";import"./SkipLink-BjDVCTYi.js";import"./Banner-DoijLipi.js";import"./GlobalHeader-Bvbzil1j.js";import"./useIsDesktop-BJe-cVtk.js";import"./GlobalAccountButton-BQF_lDUM.js";import"./Enter-0Yba7b_H.js";import"./GlobalMenuButton-Dyh7Q0Q2.js";import"./MenuHamburger-Dp9iHReE.js";import"./AccountSelector-DcCiBW_b.js";import"./heading-C-Iwie4k.js";import"./AccountMenu-DRORBlif.js";import"./Switch-6FvXDRQ8.js";import"./GlobalMenu-CSJNtQxR.js";import"./ArrowUndo-BrRKnSKJ.js";import"./Globe-C4inFFJx.js";import"./BreadcrumbsLink-A99X6Qdv.js";import"./ArrowRight-8nOEs7Bb.js";import"./Footer-CgkzEYBs.js";import"./SettingsModal-D9Bwsf9R.js";import"./ModalBody-lU1YKfiD.js";import"./ButtonGroup-CSUZvsoD.js";import"./ButtonIcon-C8wYqRVe.js";import"./ButtonLabel-DvXULbxc.js";import"./TextField-DZRDAZ9k.js";const Do={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ho=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ho as __namedExportsOrder,Do as default};
