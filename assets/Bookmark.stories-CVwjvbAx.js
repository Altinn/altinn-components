import{j as o}from"./iframe-BakMcPB9.js";import{u as h}from"./useInboxLayout-BkIlXSNJ.js";import{u as j}from"./useAccountMenu-B3wqCLAq.js";import{u as c,B as g}from"./useBookmarks-Dcg7BQhd.js";import{L as k}from"./Layout-BmmA0eVB.js";import{P as x}from"./PageBase-QrQAiaqc.js";import{H as p}from"./Heading-Dpm-6zaj.js";import{T as b}from"./Toolbar-B_CGAfU5.js";import{B as I}from"./BookmarkModal-D5RTpldQ.js";import{u as S}from"./useProfileLayout-iM7oE8hN.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-CGiK4vJo.js";import"./InboxFill-CiG_afGx.js";import"./useId-Btw-Kuqp.js";import"./Plus-CsNf283B.js";import"./PersonCircle-ORAuXLOM.js";import"./Bookmark-Cm0-2Exr.js";import"./Archive-BR--IAyW.js";import"./Trash-C23JfHvO.js";import"./InformationSquare-XaKmtjKI.js";import"./globalMenu-BcibZR63.js";import"./Buildings2-AdE5hB6g.js";import"./MenuGrid-lPKzDSTw.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout--b09YgCm.js";import"./useLocale-Df2NxEB4.js";import"./header-CjZC2_l2.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-C97JobCu.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-D_Gbr3UA.js";import"./QueryLabel-CPNmRYE5.js";import"./SettingsItemBase-CgS3639z.js";import"./ChevronUp-D-5UFsw8.js";import"./ChevronDown-DMRBxZop.js";import"./ChevronRight-C2TalX8u.js";import"./ItemLink-Dn0iTF8z.js";import"./index-DAwqyEdM.js";import"./ItemMedia-CMtvzv_T.js";import"./XMark-D8cLqedS.js";import"./Avatar-bwZt4czp.js";import"./Skeleton-CIZGLt5B.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./ItemControls-BIaUvdXD.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-BzplxmiV.js";import"./useHighlightedText-nzhiVGnc.js";import"./ContextMenu-z94PUUNE.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Dropdown-UmxICHKp.js";import"./MenuElipsisHorizontal-554EG_sf.js";import"./SearchField-rHpPiKo0.js";import"./FieldBase-B35pktZu.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./Checkmark-Bv6xEUnW.js";import"./useMenu-BaGtO6Vm.js";import"./Pencil-BCvakCZg.js";import"./SkipLink-tzg0heUh.js";import"./GlobalHeader-D9Rb4Fvy.js";import"./useIsDesktop-DD1-kwof.js";import"./GlobalAccountButton-D1ZtEyDi.js";import"./Enter-DtzLbGWD.js";import"./GlobalMenuButton-DaRZu45x.js";import"./MenuHamburger-ChSiVscJ.js";import"./AccountSelector-DNnZOxUy.js";import"./heading-EL6ZIu79.js";import"./AccountMenu-CQ_VEF0u.js";import"./Switch-xtMa6te7.js";import"./GlobalMenu-CQkoXXqX.js";import"./ArrowUndo-B1TPuteg.js";import"./Globe-DotiYBci.js";import"./BreadcrumbsLink-TKbmZpM7.js";import"./ArrowRight-16ulrcEm.js";import"./Footer-PisAEy7f.js";import"./Flex-73Lku4Kd.js";import"./ChevronUpDown-BQWoe1O9.js";import"./ButtonGroup-4RnrqVmD.js";import"./ButtonGroupDivider-BxtMkVsF.js";import"./ToolbarMenu-B3EEzWoM.js";import"./ToolbarSearch-CKv0R1zR.js";import"./SettingsModal-CxuQHGWI.js";import"./ModalBody-BH-DS5mt.js";import"./Section-C3ywv7P2.js";import"./ButtonIcon-boAFcVxG.js";import"./ButtonLabel-BvF3ABNB.js";import"./TextField-BIeeTmj2.js";import"./Bell-DBsUPEGE.js";import"./ClockDashed-CWsxc4aJ.js";const Be={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const je=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,je as __namedExportsOrder,Be as default};
