import{j as o}from"./iframe-0B_Yudin.js";import{u as h}from"./useInboxLayout-BYw8j3Ip.js";import{u as j}from"./useAccountMenu-CY3f9UY9.js";import{u as c,B as g}from"./useBookmarks-B4jjdqvN.js";import{L as k}from"./Layout-HHY59kNX.js";import{P as x}from"./PageBase-DKSXK-Hh.js";import{H as p}from"./Heading-iCNnL7gN.js";import{T as b}from"./Toolbar-Bi8sxGeY.js";import{B as I}from"./BookmarkModal-DQ-hYXXf.js";import{u as S}from"./useProfileLayout-AQO3JRLE.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-DCQG5OVj.js";import"./InboxFill-W7UakbcK.js";import"./useId-BUxMg0Ir.js";import"./Plus-BmqtHu8-.js";import"./PersonCircle-Cq1dPAel.js";import"./Bookmark-xUjEkd69.js";import"./Archive-DM72aU-A.js";import"./Trash-C5AYfDtF.js";import"./InformationSquare-C3Az81Rf.js";import"./globalMenu-D7pxO8X4.js";import"./Buildings2-6vsd0VXE.js";import"./MenuGrid-DYbnBtWP.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DEPJKxwS.js";import"./useLocale-ClBThj-i.js";import"./header-CDdzMi6G.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-B029Znip.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Flex-CcsVAtXA.js";import"./index-bzqtFzN_.js";import"./SettingsSection-D6rTmT22.js";import"./Section-byNAOZ7t.js";import"./BookmarkSettingsItem-Ci50V-sX.js";import"./QueryLabel-Dxn51UAp.js";import"./SettingsItemBase-CPL8qCc4.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";import"./ItemLink-BmeT6DsA.js";import"./ItemMedia-DPzqoyVf.js";import"./XMark-4vnuAWTz.js";import"./Avatar-BGwRUT15.js";import"./Skeleton-CCW5QxrE.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./ItemControls-DGPFdAX4.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./ContextMenu-CnWikKRV.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Dropdown-Ceu59hlm.js";import"./MenuElipsisHorizontal-Brw3IxFk.js";import"./SearchField-aP7iZ-N9.js";import"./FieldBase-BRRzaSEH.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./Checkmark-BmAdxrUQ.js";import"./useMenu-G8FOBFFN.js";import"./List-BxubJ1l7.js";import"./ListItem-DnHiZFTT.js";import"./Divider-DZtdoQqC.js";import"./Pencil-ByhlV4aA.js";import"./SkipLink-BjDVCTYi.js";import"./Banner-DoijLipi.js";import"./GlobalHeader-Bvbzil1j.js";import"./useIsDesktop-BJe-cVtk.js";import"./GlobalAccountButton-BQF_lDUM.js";import"./Enter-0Yba7b_H.js";import"./GlobalMenuButton-Dyh7Q0Q2.js";import"./MenuHamburger-Dp9iHReE.js";import"./AccountSelector-DcCiBW_b.js";import"./heading-C-Iwie4k.js";import"./AccountMenu-DRORBlif.js";import"./Switch-6FvXDRQ8.js";import"./GlobalMenu-CSJNtQxR.js";import"./ArrowUndo-BrRKnSKJ.js";import"./Globe-C4inFFJx.js";import"./BreadcrumbsLink-A99X6Qdv.js";import"./ArrowRight-8nOEs7Bb.js";import"./Footer-CgkzEYBs.js";import"./ChevronUpDown-oD2FsggY.js";import"./ButtonGroup-CSUZvsoD.js";import"./ButtonGroupDivider-BIa7C9rx.js";import"./ToolbarMenu-_dyMSq4G.js";import"./ToolbarSearch-DR8Q5FFl.js";import"./SettingsModal-D9Bwsf9R.js";import"./ModalBody-lU1YKfiD.js";import"./ButtonIcon-C8wYqRVe.js";import"./ButtonLabel-DvXULbxc.js";import"./TextField-DZRDAZ9k.js";import"./Bell-I9jdyPhB.js";import"./ClockDashed-Bz_gcxU0.js";const ye={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:i}=j({includeGroups:!0}),{expandedId:r,onClose:s,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:i?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:s,buttons:[{label:"Lagre",onClick:()=>s()},{label:"Slett",variant:"outline",onClick:()=>s()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const Pe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Pe as __namedExportsOrder,ye as default};
