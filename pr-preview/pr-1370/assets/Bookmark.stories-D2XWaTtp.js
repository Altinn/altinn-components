import{a7 as o}from"./iframe-DK26OyRD.js";import{u as S}from"./useProfileLayout-BTZduYM-.js";import{u as c,B as g}from"./useBookmarks-KU14hdW7.js";import{L as k}from"./Layout-BcBr38eq.js";import{P as x}from"./PageBase-GGLyzDRX.js";import{H as p}from"./Heading-KMM5EtCs.js";import{T as b}from"./Toolbar-qYkONhEF.js";import{B as I}from"./BookmarkModal-BT6fhmm0.js";import{u as h}from"./useInboxLayout-CxfZYGMW.js";import{u as f}from"./useAccountMenu-D_8qL5xf.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-B6rWCuOk.js";import"./Bell-CCVcX7Po.js";import"./Bookmark-2rp6yNDB.js";import"./ClockDashed--Dlp0KHu.js";import"./globalMenu-BgjGhabf.js";import"./PersonCircle-CITAvyGa.js";import"./Buildings2-DQ4ff-Ye.js";import"./InboxFill-3rvWKNLS.js";import"./MenuGrid-D34zZXTO.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Dptm87W-.js";import"./Trash-DH9PmhSG.js";import"./useLayout-Yj75r2vZ.js";import"./useLocale-Clg2Wn5K.js";import"./header-Cr_-pdw0.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-0kp9W_Tl.js";import"./BookmarkSettingsItem-G73r0Ssl.js";import"./QueryLabel-CyHqQtKb.js";import"./Plus-BMnL1FI5.js";import"./SettingsItemBase-BP6tVNdJ.js";import"./ItemMedia-eL3WoD14.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./ChevronUp-H846LjQF.js";import"./ChevronDown-BXSVxDRn.js";import"./ChevronRight-CgtnVZss.js";import"./ItemBase-C7L84IL-.js";import"./ItemLink-DFds8MDQ.js";import"./ItemControls-DNRsDyv1.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./Typography-DLY6k0s2.js";import"./useHighlightedText-dRdWwo97.js";import"./ContextMenu-OoWwKfGw.js";import"./useDropdownMenuController-3-_gSr8-.js";import"./Dropdown-DKc7uAuj.js";import"./SearchField-Mgah0vbC.js";import"./FieldBase-BNgybH8j.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./InformationSquare-f4aulv5D.js";import"./MenuElipsisHorizontal-CE-njAYU.js";import"./Pencil-B3lCexD9.js";import"./SkipLink-6fgDvMFq.js";import"./CookieBanner-Ew-yAjYZ.js";import"./Banner-Cnqr2F_o.js";import"./GlobalHeader-CDaMr_Rk.js";import"./useIsDesktop-BZUhQWI_.js";import"./GlobalAccountButton-CJcUpqA1.js";import"./Enter-B85cbUfy.js";import"./GlobalMenuButton-BmlIUW_I.js";import"./MenuHamburger-C6_sJYu4.js";import"./AccountSelector-B1s29TaL.js";import"./Switch-BoDdhyv4.js";import"./AccountMenu-CeZrRttM.js";import"./GlobalMenu-Z48khG5h.js";import"./ArrowUndo-zT6R2bHq.js";import"./Globe-Cc3tC6-3.js";import"./BreadcrumbsLink-8HFo-MC4.js";import"./ArrowRight-Bjn7HgM7.js";import"./Footer-BK9O7jJH.js";import"./Flex-Bsp6DeeI.js";import"./ButtonGroup-3GFoI2vi.js";import"./ButtonGroupDivider-DQquDaG5.js";import"./ChevronUpDown-rA6JKQ-i.js";import"./ToolbarMenu-BoazhCS_.js";import"./ToolbarSearch-B7D7KXDK.js";import"./SettingsModal-CFM_KvJS.js";import"./ModalBody-LJkI2hmG.js";import"./Section-5gLqA0oM.js";import"./ButtonIcon-prTPeC3u.js";import"./ButtonLabel-DONh2DdN.js";import"./TextField-DqUmkbQv.js";import"./inboxMenu-CNWCtwnR.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
