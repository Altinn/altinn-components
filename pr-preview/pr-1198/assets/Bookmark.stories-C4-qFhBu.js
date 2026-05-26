import{j as o}from"./iframe-DU0n7__8.js";import{u as h}from"./useInboxLayout-xfNYauE4.js";import{u as j}from"./useAccountMenu-B1Kjloif.js";import{u as c,B as g}from"./useBookmarks-Cjto0WgU.js";import{L as k}from"./Layout-CDrdHTwn.js";import{P as x}from"./PageBase-Dh04bbNa.js";import{H as p}from"./Heading-BrrIdLRc.js";import{T as b}from"./Toolbar-qFeKz95G.js";import{B as I}from"./BookmarkModal-kY30Tkm5.js";import{u as S}from"./useProfileLayout-BsvNYqLf.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-CKA9Z7cr.js";import"./InboxFill-BY9s4Eha.js";import"./useId-DCXiBgwp.js";import"./Plus-BxZePwQm.js";import"./PersonCircle-C5Yra1cm.js";import"./Bookmark-CKXgK4eW.js";import"./Archive-BK5DGjhH.js";import"./Trash-MdbyzcW1.js";import"./InformationSquare-Bfq2NTGF.js";import"./globalMenu-v0OSVy5N.js";import"./Buildings2-BAJoSK4H.js";import"./MenuGrid-CH-9RbmU.js";import"./MagnifyingGlass-COVfkIqf.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-BhWJPcfn.js";import"./useLocale-CXdyMocm.js";import"./header-hSXwTL6l.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-CtZjD9gP.js";import"./Button-pXyw-iqn.js";import"./tooltip-UENHGvJl.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-C56Sp0fh.js";import"./QueryLabel-CaEIA6-Q.js";import"./SettingsItemBase-DMrHKdiZ.js";import"./ChevronUp-B4O89os7.js";import"./ChevronDown-Bfnu4XYc.js";import"./ChevronRight-B4fDZY6k.js";import"./ItemLink-B8GeE3YY.js";import"./index-sAFX08uI.js";import"./ItemMedia-yH6oBbwQ.js";import"./XMark-DGVnrVrT.js";import"./Avatar-Bsgd2iIp.js";import"./Skeleton-etbnaSOo.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./ItemControls-BwQhe1K-.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./Typography-DOUoXZCv.js";import"./useHighlightedText-Wa_y882s.js";import"./ContextMenu-ki5GIL8X.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./SearchField-B4KuSSyF.js";import"./FieldBase-BIV16XC5.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./Checkmark-CCpN8hs9.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./Pencil-DmC081bf.js";import"./SkipLink-DtUBT_fK.js";import"./Banner-B1v-1JYo.js";import"./GlobalHeader-8T2K0YMV.js";import"./useIsDesktop-C2Brmgmw.js";import"./GlobalAccountButton-BhzlUjed.js";import"./Enter-WxQAMlE7.js";import"./GlobalMenuButton-CkX6sJhh.js";import"./MenuHamburger--Lo7F4E1.js";import"./AccountSelector-CeYLjN3U.js";import"./AccountMenu-CJHw-x1F.js";import"./Switch-CRWhuB4h.js";import"./GlobalMenu-BDO3Pv-H.js";import"./ArrowUndo-Bx0cXSI_.js";import"./Globe-03FCv489.js";import"./BreadcrumbsLink-DMWRlgdL.js";import"./ArrowRight-DSxX6LAd.js";import"./Footer-CPbR1qGi.js";import"./Flex-C_O_eubX.js";import"./ChevronUpDown-DOKppJjP.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonGroupDivider-B64rjX68.js";import"./ToolbarMenu-DIvagWDA.js";import"./ToolbarSearch-DkHlFmo7.js";import"./SettingsModal-DHjDeK3E.js";import"./ModalBody-DelIgQsz.js";import"./Section-DwU7Gyqo.js";import"./ButtonIcon-FC_tMBA0.js";import"./ButtonLabel-DfiBlqye.js";import"./TextField-Dl9QfE1k.js";import"./Bell-BcvPsB0o.js";import"./ClockDashed-BJpd6pOc.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
