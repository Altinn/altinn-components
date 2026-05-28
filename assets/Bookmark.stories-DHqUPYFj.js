import{p as o}from"./iframe-DrMVe4hJ.js";import{u as S}from"./useProfileLayout-oiYAwrKz.js";import{u as c,B as g}from"./useBookmarks-9VJpw9Sw.js";import{L as k}from"./Layout-CMusrhEd.js";import{P as x}from"./PageBase-CsI5clF5.js";import{H as p}from"./Heading-DYwrq57L.js";import{T as b}from"./Toolbar-CRtbo8Qm.js";import{B as I}from"./BookmarkModal-zy-7blk1.js";import{u as h}from"./useInboxLayout-BEwy6UhJ.js";import{u as f}from"./useAccountMenu-KMOR8Eui.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-hfTMvonT.js";import"./useId-CwrI0QJg.js";import"./Bell-b8sn31s3.js";import"./Bookmark-CbOgZWyk.js";import"./ClockDashed-BtZjq-3Y.js";import"./globalMenu-D_AnKYGY.js";import"./PersonCircle-ChnCnn6V.js";import"./Buildings2-Bj6G_QDF.js";import"./InboxFill-BZ5kfP5P.js";import"./MenuGrid-FgdNCw-Y.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BqJg8DEZ.js";import"./Trash-DgVztnIf.js";import"./useLayout-CR6aTpXO.js";import"./useLocale-CeMd-s_T.js";import"./header-DA7Kq6sA.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CrRt-E4f.js";import"./BookmarkSettingsItem-DuMeil2c.js";import"./QueryLabel-DcDaMQuD.js";import"./Plus-CPTNbqFv.js";import"./SettingsItemBase-B5pF_5of.js";import"./ItemMedia-B9-jRKLO.js";import"./index-B2LUQ97G.js";import"./XMark-BXMpu0Gf.js";import"./Avatar-toOOZ7nf.js";import"./Skeleton-BKl0bJYN.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./ChevronUp-CD8uiaYc.js";import"./ChevronDown--vsRLj1W.js";import"./ChevronRight-u16zgCRT.js";import"./ItemBase-DuWKD7l0.js";import"./ItemLink-Cz_W1z7X.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./tooltip-BY1BnveL.js";import"./Typography-BZD6V0ik.js";import"./useHighlightedText-BA3QT9FH.js";import"./ContextMenu-Dtj8L1E_.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./Button-B40GVZAo.js";import"./SearchField-BnuJ-svS.js";import"./FieldBase-C4Wnopmd.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./MenuElipsisHorizontal-BLWR8eqI.js";import"./Pencil-DSvwE8vz.js";import"./SkipLink-BX0Sk14S.js";import"./Banner-CYJ-GFc3.js";import"./GlobalHeader-HqAOspum.js";import"./useIsDesktop-BPcHKUeF.js";import"./GlobalAccountButton-D-pGviYt.js";import"./Enter-CSMdGEsW.js";import"./GlobalMenuButton-CSr5zULA.js";import"./MenuHamburger-DFEV7Ips.js";import"./AccountSelector-FLYfbKiC.js";import"./Switch-Dnru9sKh.js";import"./AccountMenu-DaOWAbw-.js";import"./GlobalMenu-BdhZCIDm.js";import"./ArrowUndo-DXCdgahn.js";import"./Globe-BHi7RQK5.js";import"./BreadcrumbsLink-Ct-YnSsW.js";import"./ArrowRight-T6aW628X.js";import"./Footer-Dv2u6hjp.js";import"./Flex-Bv-_adYq.js";import"./ButtonGroup-Bxqmt3uG.js";import"./ButtonGroupDivider-t1hdeYZx.js";import"./ChevronUpDown-DxkeSRKc.js";import"./ToolbarMenu-D5qMSH42.js";import"./ToolbarSearch-DZ3dSuRw.js";import"./SettingsModal-C32hC9f4.js";import"./ModalBody-ClYSa-ii.js";import"./Section-BOFb_opG.js";import"./ButtonIcon-DJjLAXS2.js";import"./ButtonLabel-s3GO9UyL.js";import"./TextField-DfaPQYZk.js";import"./inboxMenu-DNfNUEqO.js";const Ce={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Le=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Le as __namedExportsOrder,Ce as default};
