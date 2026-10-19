var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-C_3qWz8U.js";import{u as j}from"./useProfileLayout-3i6YP9Zl.js";import{u as g,B as k}from"./useBookmarks-B5vE9wVc.js";import{L as x}from"./Layout-Da8EBPKg.js";import{P as b}from"./PageBase-DfEOLhka.js";import{H as n}from"./Heading-mFc3Xe1m.js";import{T as I}from"./Toolbar-BaN42SjD.js";import{B as h}from"./BookmarkModal-TZzFCD2b.js";import{u as C}from"./useInboxLayout-C4Yq_3Ak.js";import{u as y}from"./useAccountMenu-DyAD_b2o.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-hsfVC7cP.js";import"./Bell-Bpe1AR9G.js";import"./Bookmark-CQqchivH.js";import"./ClockDashed-Bi2OBX1v.js";import"./globalMenu-BpzYzkGb.js";import"./PersonCircle-B6fG4_ys.js";import"./Buildings2-DI2Qx4qD.js";import"./InboxFill-BXPi7rH2.js";import"./MenuGrid-DrCpJymH.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BEuDz18x.js";import"./Trash-CF3fiEwO.js";import"./useLayout-Bnm5sTTP.js";import"./useLocale-D4eqsiYd.js";import"./header-BXZhewUp.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DHyqVfH8.js";import"./BookmarkSettingsItem-DwAPr73y.js";import"./QueryLabel-ca-OtExV.js";import"./Plus-DHsDmPUd.js";import"./SettingsItemBase-Df9MmMMP.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";import"./ItemBase-DGBv8zFK.js";import"./ItemLink-BlWZTpmg.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./Typography-BcJ8Dd08.js";import"./useHighlightedText-ChiMW-L8.js";import"./ContextMenu-d1Kruqes.js";import"./useDropdownMenuController-B_MLek_v.js";import"./Dropdown-C4WgdX01.js";import"./SearchField-wVxLElBM.js";import"./FieldBase-2HPCGFYx.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./InformationSquare-BJVzaHsz.js";import"./MenuElipsisHorizontal-D39QN37D.js";import"./Pencil-De-3etwL.js";import"./SkipLink-DwFjfjL6.js";import"./CookieBanner-D6uat3gK.js";import"./Banner-DjQkzI6t.js";import"./GlobalHeader-Bne5W4yd.js";import"./useIsDesktop-DKESkq3h.js";import"./GlobalAccountButton-Dlx_zq3B.js";import"./Enter-2WPn9LKN.js";import"./GlobalMenuButton-DZuoYZet.js";import"./MenuHamburger-DihebW8m.js";import"./AccountSelector-6kku4Vx_.js";import"./Switch-Br6FtIP2.js";import"./AccountMenu-BoZildmP.js";import"./GlobalMenu-Dl-f4PBe.js";import"./ArrowUndo-VSyd97tJ.js";import"./Globe-DuJDLN5K.js";import"./BreadcrumbsLink-DTRccQS2.js";import"./ArrowRight-BfdhXNgV.js";import"./Footer-DCF1wHcb.js";import"./Flex-BTfeLS8w.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonGroupDivider-DCxTBizd.js";import"./ChevronUpDown-bCOc7Q_P.js";import"./ToolbarMenu-DOZ8j3Oa.js";import"./ToolbarSearch-CauYnztQ.js";import"./SettingsModal-DErnX0V6.js";import"./ModalBody-BKf16YWY.js";import"./Section-CCH9N23g.js";import"./ButtonIcon-CkJ7s5gA.js";import"./ButtonLabel-IXPMuGu0.js";import"./TextField-Zt09XX06.js";import"./inboxMenu-IwprcV0J.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
