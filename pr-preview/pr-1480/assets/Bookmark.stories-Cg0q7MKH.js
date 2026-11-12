var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CrglqwQn.js";import{u as j}from"./useProfileLayout-DNu-Ygqx.js";import{u as g,B as x}from"./useBookmarks-Bt6sjL9C.js";import{L as k}from"./Layout-BtmXYADp.js";import{P as b}from"./PageBase-D_DEZEpM.js";import{H as m}from"./Heading-Cue2sNHi.js";import{T as I}from"./Toolbar-9N3580eF.js";import{B as h}from"./BookmarkModal-CNvtfcNI.js";import{u as C}from"./useInboxLayout--xDNIlds.js";import{u as y}from"./useAccountMenu-eifD--Pm.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CKM7yr0T.js";import"./Bell-DwndJVS_.js";import"./Bookmark-B71Tg_A4.js";import"./ClockDashed-DPlMd02p.js";import"./globalMenu-BxqPVjRD.js";import"./PersonCircle-2tYZc417.js";import"./Buildings2-uuckHAgd.js";import"./InboxFill-5KCnwHYz.js";import"./MenuGrid-4KLfWHTb.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-QnejR0rZ.js";import"./Trash-D8Yx43MO.js";import"./useLayout-BcexFKpd.js";import"./useLocale-C45L4w_z.js";import"./header-CZewJz0V.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-8J-CXIB0.js";import"./BookmarkSettingsItem-C-kA3N5R.js";import"./QueryLabel-DgoptpUX.js";import"./Plus-BsVWtc_l.js";import"./SettingsItemBase-Bf_BtRXv.js";import"./ItemMedia-CKHqoxmK.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./ChevronUp-fcfSgUs-.js";import"./ChevronDown-qCwX9ScZ.js";import"./ChevronRight-DGfPuTVb.js";import"./ItemBase-iw1hi8n1.js";import"./ItemLink-DXjQtoHW.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./Typography-BczTYRHT.js";import"./useHighlightedText-BwDaK6ea.js";import"./ContextMenu-Bpxx0kh4.js";import"./useDropdownMenuController-WGsW3heI.js";import"./useIsDesktop-BFXmchO7.js";import"./Dropdown-Bs8XHg5O.js";import"./SearchField-C2qhyCtD.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemLabel-C8AtzUlo.js";import"./FieldBase-B81pLsMF.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./InformationSquare-BOQji3ZT.js";import"./Pencil-DRqCWXGy.js";import"./SkipLink-dW7OoA73.js";import"./CookieBanner-DuM_xTLh.js";import"./Link-Chsrp-ow.js";import"./Banner-CO4ulxs9.js";import"./GlobalHeader-IkXOnXah.js";import"./GlobalAccountButton-DM1YrGJI.js";import"./Enter-zEk9kRFx.js";import"./GlobalMenuButton-Gdg78j4Y.js";import"./MenuHamburger-Co7zqsTV.js";import"./AccountSelector-BNOyXtGS.js";import"./Switch-CWx3MDUl.js";import"./AccountMenu-BL-n-r0X.js";import"./GlobalMenu-DWjDb7fh.js";import"./Checkmark-D7BkIwSo.js";import"./ArrowUndo-B915tdkI.js";import"./Globe-KdSZmZPM.js";import"./BreadcrumbsLink-Bbwo0LYF.js";import"./ArrowRight-CwRhQGdr.js";import"./Footer-D5l3ArAx.js";import"./Flex-DJ9jSUVh.js";import"./ButtonGroup-DBlS54nG.js";import"./ButtonGroupDivider-Cpa88dGM.js";import"./ChevronUpDown-BOLcNr1O.js";import"./ToolbarMenu-BqL5gXT1.js";import"./ToolbarSearch-_H84Lz4H.js";import"./SettingsModal-Nr6jK-S2.js";import"./ModalBody-ywYcZdTp.js";import"./Section-DbuH07eX.js";import"./ButtonIcon-CR0jjdG5.js";import"./ButtonLabel-DUOJn9GW.js";import"./TextField-NIMGtDGP.js";import"./inboxMenu-CliYnW1T.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
