var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-Bv9y2YZF.js";import{u as j}from"./useProfileLayout-Cn96s9Br.js";import{u as g,B as k}from"./useBookmarks-DFszSF7X.js";import{L as x}from"./Layout-C3QQC_y6.js";import{P as b}from"./PageBase-C-LGHzYC.js";import{H as n}from"./Heading-CDZ3_iYV.js";import{T as I}from"./Toolbar-5W-HZqc-.js";import{B as h}from"./BookmarkModal-DCP4AMdk.js";import{u as C}from"./useInboxLayout-CH_YTZcV.js";import{u as y}from"./useAccountMenu-C7IrRYos.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DXgvfbND.js";import"./Bell-C-UuEd4P.js";import"./Bookmark-CxxANetE.js";import"./ClockDashed-OPx8LfHd.js";import"./globalMenu-C_P803DG.js";import"./PersonCircle-BAfZY-GC.js";import"./Buildings2-BeaWmSSV.js";import"./InboxFill-BWUP4o7z.js";import"./MenuGrid-NBrgBJaj.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BZe-TlAS.js";import"./Trash-D9cqJvdS.js";import"./useLayout-3E5lnQHy.js";import"./useLocale--rMGF6-r.js";import"./header-C_6SnzN5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B94lF56c.js";import"./BookmarkSettingsItem-BsULhS3U.js";import"./QueryLabel-_hRDVL_a.js";import"./Plus-vOPLkYgp.js";import"./SettingsItemBase-Chn0L4dt.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./ChevronRight-B_ztNHmN.js";import"./ItemBase-DiWDtFEx.js";import"./ItemLink-C-pnxU8M.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./Typography-AZvc429m.js";import"./useHighlightedText-B3SRW8uR.js";import"./ContextMenu-Bv-yi6hM.js";import"./useDropdownMenuController-BYwkMXkD.js";import"./Dropdown-DQyu8KYK.js";import"./SearchField-Bk5qe-oT.js";import"./FieldBase-qKDj-2_C.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./InformationSquare-BoyRK6zF.js";import"./MenuElipsisHorizontal-BfbhNlCU.js";import"./Pencil-Bvm8lVLT.js";import"./SkipLink-Bt2A0zmA.js";import"./CookieBanner-x3DERLN8.js";import"./Banner-DbqK-nbR.js";import"./GlobalHeader-OeFPbV6D.js";import"./useIsDesktop-DtqNBB9o.js";import"./GlobalAccountButton-qZohFw4c.js";import"./Enter-Dh8Hm6Mk.js";import"./GlobalMenuButton-CkOoAgh5.js";import"./MenuHamburger-Rv0EpLGA.js";import"./AccountSelector-nBuOEX0t.js";import"./Switch-CK1DZ9-L.js";import"./AccountMenu-B46jN_aJ.js";import"./GlobalMenu-C_1726fk.js";import"./ArrowUndo-BFPX-Hsc.js";import"./Globe-BL4BJF4r.js";import"./BreadcrumbsLink-9dv1Pynw.js";import"./ArrowRight-CkweDtTF.js";import"./Footer-CO8r1KiX.js";import"./Flex-k0HwcErc.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonGroupDivider-ZSZown_M.js";import"./ChevronUpDown-DgipHcom.js";import"./ToolbarMenu-DvYBhnPD.js";import"./ToolbarSearch-BvuzNCnf.js";import"./SettingsModal-C7UV_pJj.js";import"./ModalBody-Bb-z6REP.js";import"./Section-SEwZH98m.js";import"./ButtonIcon-BgohvzPZ.js";import"./ButtonLabel--Rsf9jsc.js";import"./TextField-BKY9Zb_n.js";import"./inboxMenu-CGe_wBEL.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
