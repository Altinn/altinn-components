import{a7 as o}from"./iframe-DzC97elN.js";import{u as S}from"./useProfileLayout-Ya3hN0R-.js";import{u as c,B as g}from"./useBookmarks-C7zzmH_Y.js";import{L as k}from"./Layout-LwIb5n_S.js";import{P as x}from"./PageBase-UDp-lgoO.js";import{H as p}from"./Heading-DiLLFIwR.js";import{T as b}from"./Toolbar-DS85p_4H.js";import{B as I}from"./BookmarkModal-CnihOMlS.js";import{u as h}from"./useInboxLayout-CwjhvYYZ.js";import{u as f}from"./useAccountMenu-CVVAP7II.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Da683xUR.js";import"./Bell-jNl_hai2.js";import"./Bookmark-BA4EhbnL.js";import"./ClockDashed-6ci_YaU6.js";import"./globalMenu-MDzG8fA_.js";import"./PersonCircle-CRIoDXsu.js";import"./Buildings2-1XYI9-k1.js";import"./InboxFill-DbXvtP7e.js";import"./MenuGrid-D_UEv0HQ.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Dumd_ZmV.js";import"./Trash-CQFpGbne.js";import"./useLayout-BKZq0zEe.js";import"./useLocale-Cgx6U3dX.js";import"./header-BCbrDOiX.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BjgtGKwv.js";import"./BookmarkSettingsItem-D5d_RliV.js";import"./QueryLabel-Cfhsi1iU.js";import"./Plus-CcwlUJc-.js";import"./SettingsItemBase-DNgPJ9Wa.js";import"./ItemMedia-BZutnkw1.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./ItemBase-IHm1UMeF.js";import"./ItemLink-DWCmLscF.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./Typography-CtPp6NJn.js";import"./useHighlightedText-w8ugv_c2.js";import"./ContextMenu-DV3SzXR2.js";import"./useDropdownMenuController-w-DqwR3B.js";import"./Dropdown-BeW3qmVa.js";import"./SearchField-D-nsUeta.js";import"./FieldBase-CCQqXbf-.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./MenuElipsisHorizontal-CCv4JH7o.js";import"./Pencil-D5mHhLGr.js";import"./SkipLink-y88aaf3q.js";import"./Banner-C2Inp0At.js";import"./GlobalHeader-DKxsGyRA.js";import"./useIsDesktop-CeAKLIl5.js";import"./GlobalAccountButton-BbhWzELj.js";import"./Enter-C8NWLzit.js";import"./GlobalMenuButton-CDedrrkY.js";import"./MenuHamburger-BRGi738L.js";import"./AccountSelector-SPH3qZZ4.js";import"./Switch-JfrAs-Bf.js";import"./AccountMenu-DqYEsx_-.js";import"./GlobalMenu-BRnykkmv.js";import"./ArrowUndo-8H_Vm8H2.js";import"./Globe-XbmWHGjJ.js";import"./BreadcrumbsLink-Dz7paneK.js";import"./ArrowRight-DoT43tsN.js";import"./Footer-A52M92Dj.js";import"./Flex-CXtmXiNa.js";import"./ButtonGroup-BbJZX9rk.js";import"./ButtonGroupDivider-pKbXYIZI.js";import"./ChevronUpDown-COFy5lK_.js";import"./ToolbarMenu-quz7XEjO.js";import"./ToolbarSearch-D5CBxluS.js";import"./SettingsModal-B-gWkeFY.js";import"./ModalBody-CsfaIftq.js";import"./Section-B7XqZvfR.js";import"./ButtonIcon-QQ_ZbP2-.js";import"./ButtonLabel-D7hHDrz9.js";import"./TextField-PmhDe6m1.js";import"./inboxMenu-so0AdvWJ.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
