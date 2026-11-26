var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-ucBQ5HcJ.js";import{u as j}from"./useProfileLayout-BY2djM8J.js";import{u as g,B as x}from"./useBookmarks-B6PcqV-y.js";import{L as k}from"./Layout-Bi_cyIDV.js";import{P as b}from"./PageBase-BiUB-6U-.js";import{H as m}from"./Heading-B62YbUQ8.js";import{T as I}from"./Toolbar-t4aF6vsr.js";import{B as h}from"./BookmarkModal-D1YTCZi0.js";import{u as C}from"./useInboxLayout-BwfmuiLE.js";import{u as y}from"./useAccountMenu-CuaCZRb9.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-D4wd6iiy.js";import"./Bell-D0GF_M31.js";import"./Bookmark-5NMGGnkg.js";import"./ClockDashed-Du-UNe8Y.js";import"./globalMenu-C7fvoxsT.js";import"./PersonCircle-Djmo7yeD.js";import"./Buildings2-B9WePdr_.js";import"./InboxFill-BQNYYaWK.js";import"./MenuGrid-CE3Tsu_v.js";import"./MagnifyingGlass-asWGm_ME.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Ddg50if0.js";import"./Trash-C9fnn7OA.js";import"./useLayout-D28aNsd5.js";import"./useLocale-CvukjXgc.js";import"./header-D0AzK36L.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-zMhFd5Ju.js";import"./BookmarkSettingsItem-3rZxJ94u.js";import"./QueryLabel-D9hTlaww.js";import"./Plus-DM17n_Wh.js";import"./SettingsItemBase-oktmz-O4.js";import"./ItemMedia-BkaFl7YX.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./ChevronUp-Bnv01usE.js";import"./ChevronDown-CmXAxF6f.js";import"./ChevronRight-Vb4FEV6b.js";import"./ItemBase-CwHYgeFH.js";import"./ItemLink-Dm0lO5Ir.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./Typography-z9HgrCC2.js";import"./useHighlightedText-DrXs5ARP.js";import"./ContextMenu-CFrUWzsT.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./SearchField-0Y9a3sbc.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemLabel-CZZsCEBi.js";import"./FieldBase-BybGrojy.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./InformationSquare-BC6md9kr.js";import"./Pencil-Bfq6JxVJ.js";import"./SkipLink-C9txk-sp.js";import"./CookieBanner-D6pUxKNo.js";import"./Link-DTV1xOLq.js";import"./Banner-DxB99WTc.js";import"./GlobalHeader-ByviVgf0.js";import"./useIsDesktop-CZdAsrqy.js";import"./GlobalAccountButton-CmEoR21v.js";import"./Enter-sVXY8qmI.js";import"./GlobalMenuButton-DNlExkap.js";import"./MenuHamburger-C-aSHA5_.js";import"./AccountSelector-BGKY4awQ.js";import"./Switch-CHgN2QZU.js";import"./AccountMenu-gaXytgsv.js";import"./GlobalMenu-DyY00_9O.js";import"./Checkmark-CqXmhnrs.js";import"./ArrowUndo-DNTrsBCI.js";import"./Globe-CHPxy7FF.js";import"./BreadcrumbsLink-OD0nSb2F.js";import"./ArrowRight-DqCWEA7H.js";import"./Footer-8BfLpNjA.js";import"./Flex-obMty-VJ.js";import"./ButtonGroup-57G882s-.js";import"./ButtonGroupDivider-n1BDx0p9.js";import"./ChevronUpDown-BnwOmR_z.js";import"./ToolbarMenu-D8eVNYGZ.js";import"./ToolbarSearch-DvZbf6bx.js";import"./SettingsModal-BSAlKkZB.js";import"./ModalBody-BJrMsUN-.js";import"./Section-BY1hSuM_.js";import"./ButtonIcon-DUU9Fits.js";import"./ButtonLabel-DiEo7qm4.js";import"./TextField-ChL6EJBp.js";import"./inboxMenu-Du9Px7kC.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
