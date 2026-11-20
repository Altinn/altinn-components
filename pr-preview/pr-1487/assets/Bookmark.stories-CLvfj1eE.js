var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DvHKorxQ.js";import{u as j}from"./useProfileLayout-DimNPKFM.js";import{u as g,B as x}from"./useBookmarks-DopJtrJY.js";import{L as k}from"./Layout-BGOJc8X0.js";import{P as b}from"./PageBase-D8rhxc2Z.js";import{H as m}from"./Heading-Cl1YAvvB.js";import{T as I}from"./Toolbar-xFDEvkSb.js";import{B as h}from"./BookmarkModal-DiXD4NXy.js";import{u as C}from"./useInboxLayout-DYHrNnE1.js";import{u as y}from"./useAccountMenu-C9yBDl5o.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DNqsa6JA.js";import"./Bell-CYRmg0LU.js";import"./Bookmark-Du-mldJF.js";import"./ClockDashed-Dy7wo5Dk.js";import"./globalMenu-Dw1qB3hK.js";import"./PersonCircle-C7aNQMvr.js";import"./Buildings2-DChFgHfm.js";import"./InboxFill-BwfO79nt.js";import"./MenuGrid-Dy4yWDeC.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-9iEfNGgD.js";import"./Trash-DVfbPaj0.js";import"./useLayout-CLDfpz0r.js";import"./useLocale-B5jh-Ozh.js";import"./header-53c7wphf.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DmIIMIa0.js";import"./BookmarkSettingsItem-CINSTTY9.js";import"./QueryLabel-C2HqkzaP.js";import"./Plus-BlCIA3TM.js";import"./SettingsItemBase-Mas3T7p4.js";import"./ItemMedia-D3TRsre4.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./ChevronUp-CNwAnotn.js";import"./ChevronDown-CIQHUQdq.js";import"./ChevronRight-BUHnh-Yw.js";import"./ItemBase-CLKLcNMq.js";import"./ItemLink-rN7vy6V2.js";import"./ItemControls--z7ByJD8.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./Typography-CvxYC9sf.js";import"./useHighlightedText-BTXbLxcU.js";import"./ContextMenu-kuvKn8Xt.js";import"./useDropdownMenuController-IkMO0B8E.js";import"./Dropdown-CZm18rgm.js";import"./SearchField-BU96PyeS.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemLabel-BPqR0X1V.js";import"./FieldBase-BZwhXyPC.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./InformationSquare-dQI1I0JD.js";import"./Pencil-CSaok8_Q.js";import"./SkipLink-BsrasTA6.js";import"./CookieBanner-C89zACVF.js";import"./Link-f4TZXGvV.js";import"./Banner-CHcz1tE6.js";import"./GlobalHeader-Bm1pjFSp.js";import"./useIsDesktop-D_CwdmZf.js";import"./GlobalAccountButton-Dvkyq19P.js";import"./Enter-CbVInwau.js";import"./GlobalMenuButton-BIiZsZYy.js";import"./MenuHamburger-DBDIkqls.js";import"./AccountSelector-CqvFZ-x3.js";import"./Switch-DcMon32a.js";import"./AccountMenu-l_9YcMP5.js";import"./GlobalMenu-BKC0fVrL.js";import"./Checkmark-Cv0i3HMy.js";import"./ArrowUndo-q1AmrM8c.js";import"./Globe-BJ6hoLpR.js";import"./BreadcrumbsLink-BigUfgp2.js";import"./ArrowRight-WkZj4CZG.js";import"./Footer-Da4KN9d7.js";import"./Flex-DGnnEuV7.js";import"./ButtonGroup-HA7R6Ya1.js";import"./ButtonGroupDivider-CnFbpfz5.js";import"./ChevronUpDown-BbMnjmgS.js";import"./ToolbarMenu-EKz1rDZF.js";import"./ToolbarSearch-CcewJSVV.js";import"./SettingsModal-C5N8mowt.js";import"./ModalBody-C1im2bkm.js";import"./Section-C_0CdUSc.js";import"./ButtonIcon-Ddz6f75V.js";import"./ButtonLabel-PIYJX3px.js";import"./TextField-uNMn-JJ9.js";import"./inboxMenu-BlaQQ0ZY.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
