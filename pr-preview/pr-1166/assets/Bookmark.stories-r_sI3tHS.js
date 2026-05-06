import{j as o}from"./iframe-JDDu8qct.js";import{u as h}from"./useInboxLayout-Bbk8JcbN.js";import{u as j}from"./useAccountMenu-BHRRUMJ3.js";import{u as c,B as g}from"./useBookmarks-B927IgWy.js";import{L as k}from"./Layout-CqYv2eDy.js";import{P as x}from"./PageBase-tTIpW9-5.js";import{H as p}from"./Heading-DTbUzRnV.js";import{T as b}from"./Toolbar-CSWi7enA.js";import{B as I}from"./BookmarkModal-BKptkpsT.js";import{u as S}from"./useProfileLayout-shrr4qW1.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-hW-hD0ju.js";import"./InboxFill-B44yj-mI.js";import"./useId-BWG34Gxg.js";import"./Plus-B0ASUJ6t.js";import"./PersonCircle-BgjjDNG1.js";import"./Bookmark-EFTc9iO5.js";import"./Archive-CIT6mhgS.js";import"./Trash-BUbta1pc.js";import"./InformationSquare-CibJvFTt.js";import"./globalMenu-u_GGySNS.js";import"./Buildings2-Dl2Ym5LJ.js";import"./MenuGrid-DfUfPYiO.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-_4AoI4Zu.js";import"./useLocale-CO7w9bPU.js";import"./header-Cb0_5b5d.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-CgHryWGN.js";import"./Button-DJdKIqrT.js";import"./button-xt_-egYh.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Flex-BxwOuuQR.js";import"./index--LOES4hQ.js";import"./SettingsSection-GInyrCOf.js";import"./Section-0xRJEQzM.js";import"./BookmarkSettingsItem-Chk00A9p.js";import"./QueryLabel-C4OKsj5_.js";import"./SettingsItemBase-BLjp_FVb.js";import"./ChevronUp-Skyl4vcA.js";import"./ChevronDown-Bp0cSPFx.js";import"./ChevronRight-CAXd-oaR.js";import"./ItemLink-C0xhkHSa.js";import"./ItemMedia-Xjox6rUV.js";import"./XMark-YkWOq4QK.js";import"./Avatar-C90IY9ut.js";import"./Skeleton-CG77vT0k.js";import"./AvatarGroup-iM9HxeRB.js";import"./Icon-DIHT6axv.js";import"./ItemControls-_7JFqe2W.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-yaBddsX3.js";import"./useHighlightedText-CEk7sGm4.js";import"./ContextMenu-CY-OQIYm.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Dropdown-C4SP0e_D.js";import"./MenuElipsisHorizontal-3YEM2VfJ.js";import"./SearchField-CPeUZoGo.js";import"./FieldBase-D3HPIoAl.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./Checkmark-D1rpd2hz.js";import"./useMenu-DwkqWK9f.js";import"./List-nBnRX5N2.js";import"./ListItem-D34g-riv.js";import"./Divider-CEupNHti.js";import"./Pencil-Ck_2vg13.js";import"./SkipLink-DhjzLoLd.js";import"./Banner-CpOWy3kF.js";import"./GlobalHeader-Nyiaiope.js";import"./useIsDesktop-Y2CHoPsm.js";import"./GlobalAccountButton-ShTzW6cT.js";import"./Enter-8voGXUw8.js";import"./GlobalMenuButton-CQEoGbbI.js";import"./MenuHamburger-D7z-4ipp.js";import"./AccountSelector-BoFcIJVp.js";import"./heading-TPm_AWJd.js";import"./AccountMenu-CFZPJtUH.js";import"./Switch-BV9s5x1n.js";import"./GlobalMenu-CofNryLE.js";import"./ArrowUndo-OD1mDHyP.js";import"./Globe-D8fNhFMN.js";import"./BreadcrumbsLink-CdI_pAsN.js";import"./ArrowRight-G6csqhYC.js";import"./Footer-B-zsBcmx.js";import"./ChevronUpDown-BaZBG0n4.js";import"./ButtonGroup-BtRMC3LR.js";import"./ButtonGroupDivider-CHx564QR.js";import"./ToolbarMenu-CCel9zNZ.js";import"./ToolbarSearch-BlqHRjKZ.js";import"./SettingsModal-BETMIUKy.js";import"./ModalBody-BI0E2lEd.js";import"./ButtonIcon-Dgd7YJHv.js";import"./ButtonLabel-BSXpWNmt.js";import"./TextField-kU4FMRNR.js";import"./Bell-C0lmnlht.js";import"./ClockDashed-6gH_acLs.js";const ye={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:i}=j({includeGroups:!0}),{expandedId:r,onClose:s,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:i?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:s,buttons:[{label:"Lagre",onClick:()=>s()},{label:"Slett",variant:"outline",onClick:()=>s()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Pe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Pe as __namedExportsOrder,ye as default};
