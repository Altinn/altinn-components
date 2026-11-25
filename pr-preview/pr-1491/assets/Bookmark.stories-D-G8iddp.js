var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-BYGPhf7N.js";import{u as j}from"./useProfileLayout-kmYTBDbf.js";import{u as g,B as x}from"./useBookmarks-BY_CHkun.js";import{L as k}from"./Layout-BPdOd1Rw.js";import{P as b}from"./PageBase-CxZ8FIOJ.js";import{H as m}from"./Heading-C5-vf6se.js";import{T as I}from"./Toolbar-D2rcCLvV.js";import{B as h}from"./BookmarkModal-DGMK40OX.js";import{u as C}from"./useInboxLayout-DGDpeV6Z.js";import{u as y}from"./useAccountMenu-EtfLqtMZ.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-Djummj3_.js";import"./Bell-BfrH_baH.js";import"./Bookmark-BxGJO_Zp.js";import"./ClockDashed-CuLyg4No.js";import"./localeSwitcher-BCkn9Xx-.js";import"./InboxFill-DWlAI5wH.js";import"./PersonGroup-Bxf-P3OI.js";import"./MenuGrid-CHEbnhS0.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./Buildings2-BkCIy4EX.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";import"./useLayout-CAOUDQsd.js";import"./useLocale-DfM0gWBz.js";import"./header-D5drYKkj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-r2OQI4uO.js";import"./BookmarkSettingsItem-C9UzX_LM.js";import"./QueryLabel-CiGbvFdK.js";import"./Plus-ChNYXBRv.js";import"./SettingsItemBase-pJ5WgIh7.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ChevronUp-C71MAo1t.js";import"./ChevronDown-DPBIQHio.js";import"./ChevronRight-BckCGbec.js";import"./ItemBase-q-LDfooT.js";import"./ItemLink-bFvWK9OW.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./Typography-BHNcIxxH.js";import"./useHighlightedText-B7c7eBDx.js";import"./ContextMenu-D1_m3HcS.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemLabel-KBN1Srj3.js";import"./FieldBase-eqne-WwB.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./InformationSquare-Cx25xyTl.js";import"./Pencil-v4b2G-N6.js";import"./SkipLink-Dgr7vA8p.js";import"./CookieBanner-DJRgFs59.js";import"./Link-9JXhPkMC.js";import"./Banner-2ZRfWoLb.js";import"./GlobalHeader-2-_5kNCX.js";import"./useIsDesktop-D4Aibili.js";import"./GlobalAccountButton-TXUATpCe.js";import"./Enter-CidaVE-r.js";import"./GlobalMenuButton-Csrrjbob.js";import"./MenuHamburger-BBEPorEN.js";import"./AccountSelector-B_Ngmqwk.js";import"./Switch-c6ueHKpQ.js";import"./AccountMenu-BmkVq2sD.js";import"./GlobalMenu-BV-cJ0dn.js";import"./Checkmark-CWd8wRaj.js";import"./ArrowUndo-BhG5BbM5.js";import"./Globe-MPkG4s1s.js";import"./BreadcrumbsLink-DogAlUIw.js";import"./ArrowRight-DWa5c0tl.js";import"./Footer-DuD_A72t.js";import"./Flex-DJhBIPT8.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonGroupDivider-DnlyYy1d.js";import"./ChevronUpDown-CsEkO8Vj.js";import"./ToolbarMenu-D39-x6U3.js";import"./ToolbarSearch-DEixWMHC.js";import"./SettingsModal-Ocr_lCKp.js";import"./ModalBody-CY91l2Bs.js";import"./Section-BRaGuhHv.js";import"./ButtonIcon-DdgcgrDi.js";import"./ButtonLabel-CfdqJJd8.js";import"./TextField-DSU2FLcY.js";import"./inboxMenu-3f8CrizC.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
