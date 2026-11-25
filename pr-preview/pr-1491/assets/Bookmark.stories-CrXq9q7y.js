var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-C0_zUbkp.js";import{u as j}from"./useProfileLayout-CZcgU6pm.js";import{u as g,B as x}from"./useBookmarks-DuuNm53n.js";import{L as k}from"./Layout-DmBB5N-6.js";import{P as b}from"./PageBase-YUdGSqix.js";import{H as m}from"./Heading-DLwaSr_O.js";import{T as I}from"./Toolbar-YAHp1rd8.js";import{B as h}from"./BookmarkModal-B1y8a25w.js";import{u as C}from"./useInboxLayout-1ppo4r7Z.js";import{u as y}from"./useAccountMenu-az0_1zHh.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BNoN-VYK.js";import"./Bell-D_-BbDHJ.js";import"./Bookmark-hn-9YXF8.js";import"./ClockDashed-DQd1Aj8d.js";import"./localeSwitcher-DQ-czMYR.js";import"./InboxFill-aFAE7ktP.js";import"./PersonGroup-nhG0hY5y.js";import"./MenuGrid-D5USsJgg.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./Buildings2-DwPA8eJN.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-C-7hLfu8.js";import"./Trash-1-5ygZCI.js";import"./useLayout-mKDj9IrR.js";import"./useLocale-C5LBRr1x.js";import"./header-diTf3tgd.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DkMnEsls.js";import"./BookmarkSettingsItem-BOu1CZ7S.js";import"./QueryLabel-Cd6PpVSK.js";import"./Plus-D_VIpiu1.js";import"./SettingsItemBase-OKa48F71.js";import"./ItemMedia-Dqx0ptul.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./ChevronUp-Co9i1NxZ.js";import"./ChevronDown-C32tY52G.js";import"./ChevronRight-C6nH0agV.js";import"./ItemBase-aXWTGndk.js";import"./ItemLink-bqgEL1bC.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./Typography-CXAuaEKv.js";import"./useHighlightedText-BFDvP_rA.js";import"./ContextMenu-CX1UDoiU.js";import"./useDropdownMenuController-XzV301bD.js";import"./Dropdown-DC94zabz.js";import"./SearchField-DNtOxHfE.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemLabel-9fWKgY8j.js";import"./FieldBase-BHBKFAe2.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./InformationSquare-CG3sxIst.js";import"./Pencil-C4I0kMrB.js";import"./SkipLink-Dm0Ae5xk.js";import"./CookieBanner-DbGDrJdt.js";import"./Link-CGeqcCdg.js";import"./Banner-DVkRGba_.js";import"./GlobalHeader-DHevhZzs.js";import"./useIsDesktop-KF_OKnzc.js";import"./GlobalAccountButton-EC8pNabB.js";import"./Enter-BA5cepcd.js";import"./GlobalMenuButton--DFb6lqD.js";import"./MenuHamburger-I_0J1-VZ.js";import"./AccountSelector-DBxkMqVm.js";import"./Switch-BJBwrzYu.js";import"./AccountMenu-B7S2sMdl.js";import"./GlobalMenu-BrdGem6M.js";import"./Checkmark-r_LW2Dwq.js";import"./ArrowUndo-BzebLQMk.js";import"./Globe-CaMonKWF.js";import"./BreadcrumbsLink-B5sXTC7A.js";import"./ArrowRight-CxiqIIv6.js";import"./Footer-CP-UON3r.js";import"./Flex-CfJLZ-_w.js";import"./ButtonGroup-Bj12kkXU.js";import"./ButtonGroupDivider-CfkOgorX.js";import"./ChevronUpDown-BOxYI2QB.js";import"./ToolbarMenu-CjNRZyG9.js";import"./ToolbarSearch-PMZG_9sd.js";import"./SettingsModal-CGaVHdrR.js";import"./ModalBody-CFE-4c3O.js";import"./Section-De3iQrxY.js";import"./ButtonIcon-CN-2Ge4q.js";import"./ButtonLabel-KTfZeThD.js";import"./TextField-DoRuDjwy.js";import"./inboxMenu-CRYoe3Qn.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
