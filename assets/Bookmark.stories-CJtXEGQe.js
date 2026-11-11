var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CXqMdlCC.js";import{u as j}from"./useProfileLayout-WnlbpUoJ.js";import{u as g,B as x}from"./useBookmarks-D32x-bDi.js";import{L as k}from"./Layout-B0Kmw8Wv.js";import{P as b}from"./PageBase-LoX2SIy1.js";import{H as m}from"./Heading-Bc_OkYLY.js";import{T as I}from"./Toolbar-B02SdnYJ.js";import{B as h}from"./BookmarkModal-ZG4O8Bge.js";import{u as C}from"./useInboxLayout-CWndh3kU.js";import{u as y}from"./useAccountMenu-ZtCuB2vf.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BM_ipkyj.js";import"./Bell-Bbe8MVOR.js";import"./Bookmark-Dvtt7kIU.js";import"./ClockDashed-DGlKC4Mz.js";import"./globalMenu-2K-k12nO.js";import"./PersonCircle-BhmCdgxO.js";import"./Buildings2-BerC_M3Z.js";import"./InboxFill-6IEAeIKt.js";import"./MenuGrid-B1wVZlDZ.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DLDgEUbl.js";import"./Trash-BZMVy5so.js";import"./useLayout-CYidKplt.js";import"./useLocale-C6lwJHTf.js";import"./header-WRAFw5u1.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CqtkU6S6.js";import"./BookmarkSettingsItem-DxvsFUlc.js";import"./QueryLabel-CJMXVMRL.js";import"./Plus-BUwnjirz.js";import"./SettingsItemBase-t405G1qu.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ChevronUp-NZ-cp3Wt.js";import"./ChevronDown-BjOSGq_A.js";import"./ChevronRight-DltnHqdC.js";import"./ItemBase-DIYbtX2k.js";import"./ItemLink-CbXALBPD.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./Typography-B65oo-6B.js";import"./useHighlightedText-DHwhs_hr.js";import"./ContextMenu-Cob_wV-j.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./SearchField-BQG9p1mb.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemLabel-DvzzIYMd.js";import"./FieldBase-0KjilGfX.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./InformationSquare-ZHKJrQSE.js";import"./Pencil-DgCxJKHO.js";import"./SkipLink-CbQhhDZZ.js";import"./CookieBanner-Dor9yVbW.js";import"./Link-CjI5sSKG.js";import"./Banner-DKJntqtX.js";import"./GlobalHeader-ByjAguUA.js";import"./useIsDesktop-BnvVJKv_.js";import"./GlobalAccountButton-W5vizdCb.js";import"./Enter-DmDgRP0Q.js";import"./GlobalMenuButton-B9op-Ewu.js";import"./MenuHamburger-BUucDG4Z.js";import"./AccountSelector-ueRGc7ms.js";import"./Switch-DAhdVzvS.js";import"./AccountMenu-BTXikZ9S.js";import"./GlobalMenu-BWM2UK14.js";import"./Checkmark-CQaorHYz.js";import"./ArrowUndo-CO4CQkvC.js";import"./Globe-uwU59LH4.js";import"./BreadcrumbsLink-C3lWgJ2I.js";import"./ArrowRight-B7D23jat.js";import"./Footer-CzbjZOfK.js";import"./Flex-C0b8jFL9.js";import"./ButtonGroup-ilSUnB_k.js";import"./ButtonGroupDivider-C7a4yusM.js";import"./ChevronUpDown-Yhvc0qNs.js";import"./ToolbarMenu-DH70VUiH.js";import"./ToolbarSearch-BwJEUjel.js";import"./SettingsModal-DPE_iqX8.js";import"./ModalBody-DEbIyzzf.js";import"./Section-CK-XPJWb.js";import"./ButtonIcon-zWanBr0a.js";import"./ButtonLabel-B5q4OgvD.js";import"./TextField-BxHcHNDN.js";import"./inboxMenu-B8L7e4Oq.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
