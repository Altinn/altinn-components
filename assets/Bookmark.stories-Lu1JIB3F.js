var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-DliZ2j7V.js";import{u as j}from"./useProfileLayout-DKaTpSkl.js";import{u as g,B as k}from"./useBookmarks-C4fmxk7o.js";import{L as x}from"./Layout-0itpjW6z.js";import{P as b}from"./PageBase-CO1vCvuX.js";import{H as n}from"./Heading-CtKubyco.js";import{T as I}from"./Toolbar-C6MKFKcQ.js";import{B as h}from"./BookmarkModal-BShvaJgt.js";import{u as C}from"./useInboxLayout-DPLaqHCE.js";import{u as y}from"./useAccountMenu-B1PfWzYV.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-IptN33lT.js";import"./Bell-CkSmkUYW.js";import"./Bookmark-DZHhxvuQ.js";import"./ClockDashed-CTPVNtLg.js";import"./globalMenu-CTfKcH8f.js";import"./PersonCircle-CV1SLENd.js";import"./Buildings2-CfN_Mmv-.js";import"./InboxFill-DWFh2g3m.js";import"./MenuGrid-kjLHCa2c.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-COw0cazQ.js";import"./Trash-CR_vY-TR.js";import"./useLayout-64AX1wX_.js";import"./useLocale-CX8mMcpD.js";import"./header-CClp5MgW.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bhv2948N.js";import"./BookmarkSettingsItem-CsjpU9Z0.js";import"./QueryLabel-NdK-nZjf.js";import"./Plus-FziPzHrq.js";import"./SettingsItemBase-BcoKJnXj.js";import"./ItemMedia-DsNtfucp.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";import"./ChevronRight-_BaSemP0.js";import"./ItemBase-B9IKgDin.js";import"./ItemLink-MyE0gqTU.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./Typography-Oc42wyxk.js";import"./useHighlightedText-D1lssxtb.js";import"./ContextMenu-D6pTyVMF.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./SearchField-CHTtqi8q.js";import"./FieldBase-CUazmIBl.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./InformationSquare-Bli9QzR2.js";import"./MenuElipsisHorizontal-CJN3iyyv.js";import"./Pencil-BJUt9aKj.js";import"./SkipLink-ChAXOTCJ.js";import"./CookieBanner-DVZqRdwK.js";import"./Banner-Bhe3Vmkc.js";import"./GlobalHeader-CDCTdJnq.js";import"./useIsDesktop-DmFMgreD.js";import"./GlobalAccountButton-DhGp9uH_.js";import"./Enter-BFNsHNEk.js";import"./GlobalMenuButton-BUvUT3hC.js";import"./MenuHamburger-BOtrt7de.js";import"./AccountSelector-CjAjfHVy.js";import"./Switch-C_H2f2Qb.js";import"./AccountMenu-CuHtLQfM.js";import"./GlobalMenu-egUmzDdz.js";import"./ArrowUndo-wAj8mUHm.js";import"./Globe-fARQJzgG.js";import"./BreadcrumbsLink-CCHcahVv.js";import"./ArrowRight-TfszhTPO.js";import"./Footer-tQkJai37.js";import"./Flex-BMB99n2z.js";import"./ButtonGroup-CWxuOyOz.js";import"./ButtonGroupDivider-BLKYTiBF.js";import"./ChevronUpDown-DyAusyIW.js";import"./ToolbarMenu-BU5BBvEN.js";import"./ToolbarSearch-BnZAKpGD.js";import"./SettingsModal-oK3DeDKP.js";import"./ModalBody-BFFzW0gc.js";import"./Section-DMRyqAwI.js";import"./ButtonIcon-DHmUYEVQ.js";import"./ButtonLabel-DMMRQrGY.js";import"./TextField-DGmrfoia.js";import"./inboxMenu-Cc97ID_j.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
