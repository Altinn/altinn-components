var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-HroKCH1i.js";import{u as j}from"./useProfileLayout-CFNYynY-.js";import{u as g,B as x}from"./useBookmarks-_q6qloW1.js";import{L as k}from"./Layout-BJWTle-B.js";import{P as b}from"./PageBase-D_1IJFb-.js";import{H as m}from"./Heading-ButwX4Fz.js";import{T as I}from"./Toolbar-q2RlUkvL.js";import{B as h}from"./BookmarkModal-Bvh2xEv-.js";import{u as C}from"./useInboxLayout-Ce6QPHGu.js";import{u as y}from"./useAccountMenu-DLFye4nI.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-CZHOmC4o.js";import"./Bell-BbNhDS7V.js";import"./Bookmark-DaEaxFpU.js";import"./ClockDashed-CJIP8yr8.js";import"./localeSwitcher-PZoiL7mz.js";import"./InboxFill-Dwv2ZDno.js";import"./PersonGroup-WrhwV8_x.js";import"./MenuGrid-DMFQx4_O.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./Buildings2-Isc-I77e.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CzrN7IRQ.js";import"./Trash-CnguooS_.js";import"./useLayout-C8WgeLqn.js";import"./useLocale-X1Z3kdXY.js";import"./header-BMddiS4F.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DLxClmSr.js";import"./BookmarkSettingsItem-BUD8Y2ch.js";import"./QueryLabel-C26Ke2lK.js";import"./Plus-CnaATfP4.js";import"./SettingsItemBase-FifKIRIq.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ChevronUp-CmHElL6S.js";import"./ChevronDown-DmtpYDji.js";import"./ChevronRight-CnU_-vpz.js";import"./ItemBase-DIAn1C91.js";import"./ItemLink-Cd5xME8U.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./Typography-mUXdli5h.js";import"./useHighlightedText-BR2lgM5a.js";import"./ContextMenu-BKY8RZIH.js";import"./useDropdownMenuController-Ba1nZRew.js";import"./Dropdown-CxvfuUHz.js";import"./SearchField-DdJVtzp5.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemLabel-BExOJJ8K.js";import"./FieldBase-Dy7F34xJ.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./InformationSquare-uPdk22J8.js";import"./Pencil-BF3eZjlq.js";import"./SkipLink-BsMHl5Dl.js";import"./CookieBanner-D5zydMJa.js";import"./Link-bcRJX1ul.js";import"./Banner-BECRe8uM.js";import"./GlobalHeader-Bdu0hHXo.js";import"./useIsDesktop-BTCUyq0Y.js";import"./GlobalAccountButton-Ci9Ajpvf.js";import"./Enter-BTzvw947.js";import"./GlobalMenuButton-C2xvSLNT.js";import"./MenuHamburger-Ca2SrZOe.js";import"./AccountSelector-DFjKkW66.js";import"./Switch-CjSSR8lu.js";import"./AccountMenu-Dghf-kj5.js";import"./GlobalMenu-B2C0Dikk.js";import"./Checkmark-rGl1e__H.js";import"./ArrowUndo-D_aPg2Cn.js";import"./Globe-BdekqIrA.js";import"./BreadcrumbsLink-BWF5RF-c.js";import"./ArrowRight-BJR7CRKc.js";import"./Footer-CWkOOgTl.js";import"./Flex-CL3BtjUZ.js";import"./ButtonGroup-Ds7x4PTq.js";import"./ButtonGroupDivider-BvjKoALv.js";import"./ChevronUpDown-CVsm6Wf1.js";import"./ToolbarMenu-BBQDHJW0.js";import"./ToolbarSearch-T6sZw5mR.js";import"./SettingsModal-DcnN5o9V.js";import"./ModalBody-BQv1Fp6f.js";import"./Section-C0qOnBgx.js";import"./ButtonIcon-NRkGjrsB.js";import"./ButtonLabel-BQfOlvzM.js";import"./TextField-Bz7blcaa.js";import"./inboxMenu-C-5L-WXl.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
