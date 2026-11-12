var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-D6r7-MD4.js";import{u as j}from"./useProfileLayout-SpzWwlvr.js";import{u as g,B as x}from"./useBookmarks-FcTSZB8I.js";import{L as k}from"./Layout-BRmwP_5T.js";import{P as b}from"./PageBase-BAUzD4k0.js";import{H as m}from"./Heading-BBX9eyEy.js";import{T as I}from"./Toolbar-DUjTvOeg.js";import{B as h}from"./BookmarkModal-DYWDTxMK.js";import{u as C}from"./useInboxLayout-Eea7Vcu3.js";import{u as y}from"./useAccountMenu-DNv1VH71.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-6Q0CsPxj.js";import"./Bell--e4uljyi.js";import"./Bookmark-DXFZnfLO.js";import"./ClockDashed-8bhbX2BH.js";import"./globalMenu-B8vVdqli.js";import"./PersonCircle-BedPTAn8.js";import"./Buildings2-LPZcIjTE.js";import"./InboxFill-8qZ2EuaI.js";import"./MenuGrid-BnpoElgk.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BY-3YmHS.js";import"./Trash-DWkOlGVD.js";import"./useLayout-B2TpKIWb.js";import"./useLocale-CX_k4MBF.js";import"./header-DBmXoirO.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BVbqxAfY.js";import"./BookmarkSettingsItem-B3ZZ8SjR.js";import"./QueryLabel-BbjKedSs.js";import"./Plus-1rnJG1Or.js";import"./SettingsItemBase-CykaSvC5.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./ItemBase-CTt5NrfE.js";import"./ItemLink-C_nP4AK3.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./Typography-CHbDBJK8.js";import"./useHighlightedText-ByiYciR_.js";import"./ContextMenu-B9oz4ZZo.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemLabel-CjCW6exE.js";import"./FieldBase-BsGJArhX.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./InformationSquare-Rb80un_D.js";import"./Pencil-Dl5wJ2cx.js";import"./SkipLink-K_XE-14U.js";import"./CookieBanner-mcZo0drp.js";import"./Link-D2eIT9zV.js";import"./Banner-CnMYqtk3.js";import"./GlobalHeader-dbQ9aWQK.js";import"./GlobalAccountButton-rYKbRJ-F.js";import"./Enter-BLoa4ehM.js";import"./GlobalMenuButton-CrF0dpnX.js";import"./MenuHamburger-JGC_mwz5.js";import"./AccountSelector-C_iWFF6J.js";import"./Switch-Tw7A9AdD.js";import"./AccountMenu-B-JRC4BL.js";import"./GlobalMenu-DJU_f6BY.js";import"./Checkmark-CffPLTp9.js";import"./ArrowUndo-CVxqjMaC.js";import"./Globe-DyYompeK.js";import"./BreadcrumbsLink-foBwcV3t.js";import"./ArrowRight-DyaydeNs.js";import"./Footer-BLEwrhcX.js";import"./Flex-BbelGz4F.js";import"./ButtonGroup-Br96c_T4.js";import"./ButtonGroupDivider-CN5V9cNU.js";import"./ChevronUpDown-ug0nSkB7.js";import"./ToolbarMenu-DhXLXKZr.js";import"./ToolbarSearch-3txfwJns.js";import"./SettingsModal-C3nFnbLP.js";import"./ModalBody-d0UpXorR.js";import"./Section-CZyWrzO9.js";import"./ButtonLabel-D2IlmIEz.js";import"./TextField-DN0N8XPX.js";import"./inboxMenu-B1h55yug.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
