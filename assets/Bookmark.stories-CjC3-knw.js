var f=Object.defineProperty;var t=(i,e)=>f(i,"name",{value:e,configurable:!0});import{a7 as o}from"./iframe-ITS-2hJr.js";import{u as j}from"./useProfileLayout-B_mA4JLq.js";import{u as g,B as k}from"./useBookmarks-CNw8t-lG.js";import{L as x}from"./Layout-CBbeUtmm.js";import{P as b}from"./PageBase-DsJJeZMz.js";import{H as n}from"./Heading-Bdv6LYG9.js";import{T as I}from"./Toolbar-B4EZvB9l.js";import{B as h}from"./BookmarkModal-CQt_78Wi.js";import{u as C}from"./useInboxLayout-CNthHlIE.js";import{u as y}from"./useAccountMenu-C-4o4W_3.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-oj3X-ZaZ.js";import"./Bell-CYI2F0Fp.js";import"./Bookmark-BoS4cVq2.js";import"./ClockDashed-jbIYtePL.js";import"./globalMenu-DJCxlQHv.js";import"./PersonCircle-CuiBDSgR.js";import"./Buildings2-t8AqHIZv.js";import"./InboxFill-CrPtCltv.js";import"./MenuGrid-DxQ98BF1.js";import"./MagnifyingGlass-CFIOBciK.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BfyIZBrU.js";import"./Trash-Cy_ISLKx.js";import"./useLayout-C3Oq0Tz_.js";import"./useLocale-CDuwreSV.js";import"./header-BRJCjh72.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cz88jtED.js";import"./BookmarkSettingsItem-DM1kvNsY.js";import"./QueryLabel-DAaw7gXL.js";import"./Plus-CqSWQ4ND.js";import"./SettingsItemBase-BhuktrHX.js";import"./ItemMedia-pMPhCUmI.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./ItemBase-3_cP2lbl.js";import"./ItemLink-Ck57Gq-9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./Typography-8PAPF6ji.js";import"./useHighlightedText-B2HymlD1.js";import"./ContextMenu-CNjz3p0p.js";import"./useDropdownMenuController-CM_xdbKo.js";import"./Dropdown-wTA40yAo.js";import"./SearchField-BL8KL877.js";import"./FieldBase-CQGaRX-e.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./InformationSquare-Cv25qdYy.js";import"./MenuElipsisHorizontal-C0z8jRtS.js";import"./Pencil-Bawvj4bp.js";import"./SkipLink-D4Kpl2dS.js";import"./CookieBanner-DxNubZBJ.js";import"./Banner-DYXRQz4j.js";import"./GlobalHeader-CvUZHDa3.js";import"./useIsDesktop-Bu2cAKIc.js";import"./GlobalAccountButton-C85eO_si.js";import"./Enter-CJk0vgPg.js";import"./GlobalMenuButton-sD15wkBf.js";import"./MenuHamburger-DVI6d3MD.js";import"./AccountSelector-D1hYOr9_.js";import"./Switch-rM7WLXe7.js";import"./AccountMenu-DqOUox-s.js";import"./GlobalMenu-BWBO1TWH.js";import"./ArrowUndo-ByH49GWX.js";import"./Globe-THAXL2bb.js";import"./BreadcrumbsLink-DWVXaTsd.js";import"./ArrowRight-DmXcgtO1.js";import"./Footer-DnRjpv9q.js";import"./Flex-D_HsLLCq.js";import"./ButtonGroup-B79-xqIF.js";import"./ButtonGroupDivider-Dt9pRo8c.js";import"./ChevronUpDown-B9kTMUXY.js";import"./ToolbarMenu-D_tvtLoq.js";import"./ToolbarSearch-C_nxeNPy.js";import"./SettingsModal-CxN7IwrT.js";import"./ModalBody-Cqe55Y6K.js";import"./Section-b3xCS6xU.js";import"./ButtonIcon-DIolnyFl.js";import"./ButtonLabel-DKPFiNkA.js";import"./TextField-CtDQb2Ds.js";import"./inboxMenu-CCmxBMxU.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const i=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:a}=y({includeGroups:!0}),{expandedId:s,onClose:p,groups:l,items:m,search:L}=g({grouped:!1}),B=s&&m.find(S=>S.id===s);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:a?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:m,groups:l}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),s&&o.jsx(h,{...B,title:"Rediger lagret søk",open:s!=="",onClose:p,buttons:[{label:"Lagre",onClick:t(()=>p(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>p(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const i=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const i=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:a,search:s,groups:p}=g({grouped:!0}),l=e&&a.find(m=>m.id===e);return o.jsx(x,{...i,children:o.jsxs(b,{children:[o.jsx(n,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:s}),o.jsx(k,{items:a,groups:p}),o.jsx(n,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
