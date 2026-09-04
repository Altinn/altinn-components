import{a7 as o}from"./iframe-qmQCxFa-.js";import{u as S}from"./useProfileLayout-C0ufczZb.js";import{u as c,B as g}from"./useBookmarks-DQq5J2PS.js";import{L as k}from"./Layout-CMJIFTG2.js";import{P as x}from"./PageBase-Df6obeDM.js";import{H as p}from"./Heading-BfhEliS6.js";import{T as b}from"./Toolbar-BL2LkXuC.js";import{B as I}from"./BookmarkModal-BUSpD03u.js";import{u as h}from"./useInboxLayout-D8fW2R7n.js";import{u as f}from"./useAccountMenu-286pV01t.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CShT8fJf.js";import"./Bell-BAkU5Gwo.js";import"./Bookmark-D42G2HHb.js";import"./ClockDashed-D21SJp05.js";import"./globalMenu-D8fQvMPC.js";import"./PersonCircle-B9QME0XZ.js";import"./Buildings2-Ch8yvNUc.js";import"./InboxFill-D5LHzFom.js";import"./MenuGrid-Cn1IycGn.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C5MJ9MzP.js";import"./Trash-Bwnj9cI7.js";import"./useLayout-B1wyUqNX.js";import"./useLocale-9S1Ayhmk.js";import"./header-Bqjb9oDu.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BTzsKN7O.js";import"./BookmarkSettingsItem-c1SkPXYj.js";import"./QueryLabel-CV-T5JTx.js";import"./Plus-CuimFGeS.js";import"./SettingsItemBase-DSkR0SRZ.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./ChevronRight-D4PJikp-.js";import"./ItemBase-BQ6Vg0LW.js";import"./ItemLink-CpI2Nssx.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./Typography-CwhPNAxM.js";import"./useHighlightedText-DvW-80BF.js";import"./ContextMenu-BKNR-8e0.js";import"./useDropdownMenuController-D_F6_m9G.js";import"./Dropdown-Bfr6s4KY.js";import"./SearchField-yI2IHctk.js";import"./FieldBase-uaodyCSq.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./InformationSquare-dfx4dBae.js";import"./MenuElipsisHorizontal-BZ2CkxHW.js";import"./Pencil-Dfd5juPj.js";import"./SkipLink-DoDy8lU9.js";import"./CookieBanner-hu1hKcA9.js";import"./Banner-Cp4TjmRF.js";import"./GlobalHeader-D8wvftgy.js";import"./useIsDesktop-DzLUth4w.js";import"./GlobalAccountButton-olPj8oba.js";import"./Enter-CyT7V59U.js";import"./GlobalMenuButton-bWyM-m1J.js";import"./MenuHamburger-Ctdi4oJ4.js";import"./AccountSelector-CFzi5oPP.js";import"./Switch-BpxOeCv0.js";import"./AccountMenu-7Da30E-e.js";import"./GlobalMenu-DsiiNGkM.js";import"./ArrowUndo-D_qzoLkT.js";import"./Globe-B7Kw2TJm.js";import"./BreadcrumbsLink-COpG7DxF.js";import"./ArrowRight-CXWBv3FI.js";import"./Footer-CF_NHtRf.js";import"./Flex-Da8DWGDO.js";import"./ButtonGroup-_CfbD1Th.js";import"./ButtonGroupDivider-Q5Oe8DbS.js";import"./ChevronUpDown-DgWKinzw.js";import"./ToolbarMenu-B9iU3iDq.js";import"./ToolbarSearch-CpY2Nqk4.js";import"./SettingsModal-BgKQBtSZ.js";import"./ModalBody-90KYXdlU.js";import"./Section-DIAhVmeV.js";import"./ButtonIcon-BsscKFAt.js";import"./ButtonLabel-B8phRdNa.js";import"./TextField-BtJt0HFX.js";import"./inboxMenu-BKiCadk6.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
