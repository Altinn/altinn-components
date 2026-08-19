import{a7 as o}from"./iframe-Dvni_u8W.js";import{u as S}from"./useProfileLayout-Bg1-RlE8.js";import{u as c,B as g}from"./useBookmarks-D976PKoH.js";import{L as k}from"./Layout-BGl9isD0.js";import{P as x}from"./PageBase-CCZehxKM.js";import{H as p}from"./Heading-CzH7HB6a.js";import{T as b}from"./Toolbar-D17WWPqM.js";import{B as I}from"./BookmarkModal-CJiUkK0J.js";import{u as h}from"./useInboxLayout-BhQBNUUm.js";import{u as f}from"./useAccountMenu-DfIDvhOW.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-w0cCZ4hO.js";import"./Bell-19eXnfyt.js";import"./Bookmark-CAZ-Lg_R.js";import"./ClockDashed-Q2_U0oNh.js";import"./globalMenu-B4F5B7ue.js";import"./PersonCircle-Wf4k0F8u.js";import"./Buildings2-zpEfykWn.js";import"./InboxFill-D4425-Tc.js";import"./MenuGrid-AGCS4OAi.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D9xo3Eat.js";import"./Trash-0Q12wXYH.js";import"./useLayout-DpUnBUb5.js";import"./useLocale-CsLYaACn.js";import"./header-BnX1wtXY.js";import"./footer-B2fN4P1E.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-wTmWM5n-.js";import"./BookmarkSettingsItem-D-SuKQf3.js";import"./QueryLabel-DG1XE8v8.js";import"./Plus-B_1zWORh.js";import"./SettingsItemBase-OGpKX3i4.js";import"./ItemMedia-BulytyAO.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./ChevronUp-B-cuVFt7.js";import"./ChevronDown-wy-_efuj.js";import"./ChevronRight-CHz63rRB.js";import"./ItemBase-Dhpm696r.js";import"./ItemLink-DONwvW-Z.js";import"./ItemControls-C8iXC4AM.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./Typography-UWzQw34I.js";import"./useHighlightedText-CLLTD9Wh.js";import"./ContextMenu-DLU0U19W.js";import"./useDropdownMenuController-C43pfIK4.js";import"./Dropdown-BFgXRZ9P.js";import"./SearchField-CJEH8bYw.js";import"./FieldBase-ChKWoxnf.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./InformationSquare-ZFR98d1q.js";import"./MenuElipsisHorizontal-ChUvvCwa.js";import"./Pencil-ybWtIKP9.js";import"./SkipLink-hRoxc1kk.js";import"./CookieBanner-CeeBIT1G.js";import"./Banner-BoSTLP2u.js";import"./GlobalHeader-D5aJ-opJ.js";import"./useIsDesktop-DMsXss5A.js";import"./GlobalAccountButton-BOXarTgy.js";import"./Enter-91QmnNLS.js";import"./GlobalMenuButton-Dr-fNS4N.js";import"./MenuHamburger-CK-iwV4z.js";import"./AccountSelector-C1nANC_E.js";import"./Switch-B4_rtYEL.js";import"./AccountMenu-m11kAcd8.js";import"./GlobalMenu-e9zJErKU.js";import"./ArrowUndo-CuxdBiYe.js";import"./Globe-B2BhyoCX.js";import"./BreadcrumbsLink-DAhEjbpJ.js";import"./ArrowRight-tjt3Q36Y.js";import"./Footer-DzMo6NBS.js";import"./Flex-C0xjv22N.js";import"./ButtonGroup-ChfLiHIR.js";import"./ButtonGroupDivider-DrubGLDP.js";import"./ChevronUpDown-BppjpG2Z.js";import"./ToolbarMenu-CzehRdGN.js";import"./ToolbarSearch-CmLoHfNw.js";import"./SettingsModal-C7UnawWN.js";import"./ModalBody-CMihPznN.js";import"./Section-CvMDXfkz.js";import"./ButtonIcon-DaGhQDc3.js";import"./ButtonLabel-BlQ3B1gR.js";import"./TextField-CtJ9zWcQ.js";import"./inboxMenu-D19TiTN3.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
